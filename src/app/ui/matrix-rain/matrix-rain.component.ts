import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matrix-rain',
  standalone: true,
  imports: [CommonModule],
  template: `
    <canvas #canvas class="matrix-canvas"></canvas>
  `,
  styles: [`
    :host {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
    }
    .matrix-canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  `]
})
export class MatrixRainComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private ctx!: CanvasRenderingContext2D;
  private width!: number;
  private height!: number;
  private columns!: number;
  private rows!: number;
  private drops: number[] = [];
  private animationFrameId!: number;
  private fontSize = 10; // Smaller font for higher resolution
  private chars = '01';
  
  // Logo Logic
  private logoImage = new Image();
  private logoLoaded = false;
  private logoGrid: boolean[][] = []; // [col][row] true if part of logo

  constructor() {
    this.logoImage.src = 'footer/logowhite footer.svg';
    this.logoImage.onload = () => {
      this.logoLoaded = true;
      // If canvas is already ready, map the logo
      if (this.width) {
        this.mapLogoToGrid();
      }
    };
  }

  ngAfterViewInit() {
    this.initCanvas();
    this.resize();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.resize();
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  }

  private resize() {
    const canvas = this.canvasRef.nativeElement;
    this.width = canvas.width = canvas.offsetWidth;
    this.height = canvas.height = canvas.offsetHeight;
    
    this.columns = Math.floor(this.width / this.fontSize);
    this.rows = Math.floor(this.height / this.fontSize);
    
    // Initialize drops
    this.drops = [];
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = Math.random() * -100;
    }

    if (this.logoLoaded) {
      this.mapLogoToGrid();
    }
  }

  private mapLogoToGrid() {
    // 1. Create off-screen canvas to draw logo
    const offCanvas = document.createElement('canvas');
    offCanvas.width = this.width;
    offCanvas.height = this.height;
    const offCtx = offCanvas.getContext('2d')!;

    // 2. Determine logo size (maintain aspect ratio)
    // Scale logo to be about 35% of screen width, max 300px
    const targetWidth = Math.min(this.width * 0.35, 300);
    const scale = targetWidth / this.logoImage.width;
    const targetHeight = this.logoImage.height * scale;

    // 3. Center position
    const startX = (this.width - targetWidth) / 2;
    const startY = (this.height - targetHeight) / 2;

    // 4. Draw logo to off-screen canvas
    offCtx.drawImage(this.logoImage, startX, startY, targetWidth, targetHeight);

    // 5. Read pixel data
    const imageData = offCtx.getImageData(0, 0, this.width, this.height).data;

    // 6. Populate grid
    this.logoGrid = [];
    for (let x = 0; x < this.columns; x++) {
      this.logoGrid[x] = [];
      for (let y = 0; y < this.rows; y++) {
        // Sample center pixel of the grid cell
        const pixelX = Math.floor(x * this.fontSize + this.fontSize / 2);
        const pixelY = Math.floor(y * this.fontSize + this.fontSize / 2);
        
        if (pixelX < this.width && pixelY < this.height) {
          const index = (pixelY * this.width + pixelX) * 4;
          // Check alpha channel (index + 3)
          // Threshold > 50 means it's part of the logo
          this.logoGrid[x][y] = imageData[index + 3] > 50;
        } else {
          this.logoGrid[x][y] = false;
        }
      }
    }
  }

  private animate() {
    // Fade effect for trails
    this.ctx.fillStyle = 'rgba(10, 12, 26, 0.2)'; // Faster fade for clearer logo
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.font = `${this.fontSize}px monospace`;

    // 1. Draw Falling Rain
    this.ctx.fillStyle = '#62c4aa'; // Dimmer Theme Green for Background Rain
    this.ctx.globalAlpha = 0.5;
    for (let i = 0; i < this.drops.length; i++) {
      const text = this.chars.charAt(Math.floor(Math.random() * this.chars.length));
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      // Draw drop head
      this.ctx.fillText(text, x, y);

      // Reset drop
      if (y > this.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
    this.ctx.globalAlpha = 1.0;

    // 2. Draw Logo Overlay (Shimmering)
    if (this.logoGrid.length > 0) {
      this.ctx.fillStyle = '#FFFFFF'; // White for Logo
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = '#36c9cb';

      for (let x = 0; x < this.columns; x++) {
        if (!this.logoGrid[x]) continue;
        
        for (let y = 0; y < this.rows; y++) {
          if (this.logoGrid[x][y]) {
            // Draw random binary char at this grid position
            // To make it shimmer, we pick a new random char each frame
            // To make it readable, maybe bias towards '1'?
             const text = Math.random() > 0.5 ? '1' : '0';
             
             // Optional: Randomize opacity slightly for "glitch" feel
             this.ctx.globalAlpha = 0.8 + Math.random() * 0.2;
             
             this.ctx.fillText(
               text, 
               x * this.fontSize, 
               y * this.fontSize
             );
          }
        }
      }
      // Reset global settings
      this.ctx.globalAlpha = 1.0;
      this.ctx.shadowBlur = 0;
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}