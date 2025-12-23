import { Component, ElementRef, OnInit, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matrix-grid-overlay',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="matrix-grid">
      @for (square of squares(); track $index) {
        <div class="matrix-square" 
             [style.animation-delay.ms]="square.delay"
             [class.active]="active()"></div>
      }
    </div>
    
    <div class="glitch-lines">
      @for (line of lines(); track $index) {
        <div class="glitch-line"
             [style.top.%]="line.top"
             [style.height.px]="line.height"
             [style.animation-delay.ms]="line.delay"
             [style.animation-duration.ms]="line.duration"
             [class.active]="active()"></div>
      }
    </div>
  `,
  styleUrls: ['./matrix-grid-overlay.component.scss']
})
export class MatrixGridOverlayComponent implements OnInit {
  squares = signal<{ delay: number }[]>([]);
  lines = signal<{ top: number, height: number, delay: number, duration: number }[]>([]);
  active = signal(false);
  
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.calculateGrid();
    this.generateGlitchLines();
    // Trigger animation frame next tick
    setTimeout(() => this.active.set(true), 50);
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateGrid();
  }

  calculateGrid() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const size = 25; // Smaller squares (25px)
    
    const cols = Math.ceil(width / size);
    const rows = Math.ceil(height / size);
    const count = cols * rows;
    
    const newSquares = Array.from({ length: count }, () => ({
      delay: Math.random() * 300 // Slightly faster ripple
    }));
    
    this.squares.set(newSquares);
  }

  generateGlitchLines() {
    const count = 8; // Number of glitch lines
    const newLines = Array.from({ length: count }, () => ({
      top: Math.random() * 100, // Percentage
      height: Math.random() * 2 + 1, // 1px to 3px thick
      delay: Math.random() * 200,
      duration: Math.random() * 500 + 300 // 300-800ms
    }));
    
    this.lines.set(newLines);
  }
}