import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-our-duty',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './our-duty.component.html',
  styleUrls: ['./our-duty.component.scss']
})
export class OurDutyComponent implements AfterViewInit {
  @ViewChildren('cardRef') cards!: QueryList<ElementRef>;
  
  matrixSquares: { delay: number }[] = [];
  squareSize = 20;
  hoveredCardIndex: number | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.calculateMatrixGrid();
    }
  }

  calculateMatrixGrid() {
    setTimeout(() => {
      if (this.cards && this.cards.first) {
        const cardRect = this.cards.first.nativeElement.getBoundingClientRect();
        // Use default if rect is 0 (e.g. hidden)
        const width = cardRect.width || 300; 
        const height = cardRect.height || 383;
        
        const numCols = Math.ceil(width / this.squareSize);
        const numRows = Math.ceil(height / this.squareSize);
        const totalSquares = numRows * numCols;
        
        this.matrixSquares = Array.from({ length: totalSquares }).map(() => ({
          delay: Math.random() * 300
        }));
      }
    });
  }

  setHover(index: number | null) {
    this.hoveredCardIndex = index;
  }
}