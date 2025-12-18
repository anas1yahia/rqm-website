import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener, Input } from '@angular/core';
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
  private drops: number[] = [];
  private animationFrameId!: number;
  private fontSize = 16;
  
  // Custom characters for the matrix (Binary 0 and 1, plus maybe some RQM letters if desired, keeping it standard binary for now)
  private chars = '01';

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
    this.ctx = canvas.getContext('2d')!;
  }

  private resize() {
    const canvas = this.canvasRef.nativeElement;
    this.width = canvas.width = canvas.offsetWidth;
    this.height = canvas.height = canvas.offsetHeight;
    
    this.columns = Math.floor(this.width / this.fontSize);
    
    // Initialize drops
    // If resizing, we might want to preserve some state, but resetting is easier for now
    this.drops = [];
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = Math.random() * -100; // Start above screen with random offset
    }
  }

  private animate() {
    // Semi-transparent black background to create trail effect
    this.ctx.fillStyle = 'rgba(10, 12, 26, 0.1)'; // Matches app background color #0A0C1A
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.fillStyle = '#36c9cb'; // Matrix green or Theme Teal (#36c9cb)
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.chars.charAt(Math.floor(Math.random() * this.chars.length));
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      this.ctx.fillText(text, x, y);

      // Randomly reset drop to top after it crosses screen
      // Add randomness so they don't all look the same
      if (y > this.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }

      this.drops[i]++;
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}
