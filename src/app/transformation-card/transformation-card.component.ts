import { Component, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transformation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transformation-card.component.html',
  styleUrls: ['./transformation-card.component.scss']
})
export class TransformationCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() illustration: string = '';
  @Input() marginClass: string = '';

  isLoading: boolean = true; // Added for skeleton loading
  isHovered: boolean = false;
  matrixSquares: { delay: number }[] = [];
  squareSize: number = 20; // Default square size, can be adjusted
  private numRows: number = 0;
  private numCols: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.calculateMatrixGrid();
  }

  // Calculate the number of squares needed to fill the card
  calculateMatrixGrid() {
    // Wait for the card to be rendered to get its dimensions
    setTimeout(() => {
      const cardRect = this.el.nativeElement.getBoundingClientRect();
      this.numCols = Math.ceil(cardRect.width / this.squareSize);
      this.numRows = Math.ceil(cardRect.height / this.squareSize);

      const totalSquares = this.numRows * this.numCols;
      this.matrixSquares = Array.from({ length: totalSquares }).map((_, i) => ({
        // Stagger animation based on index
        delay: Math.random() * 300 // Random delay up to 300ms for each square
      }));
    }, 0); // Use setTimeout to ensure DOM is rendered and dimensions are available
  }

  onImageLoad() {
    this.isLoading = false; // Set to false when the image loads
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
  }
}

