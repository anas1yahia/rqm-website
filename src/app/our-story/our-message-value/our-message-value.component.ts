import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-our-message-value',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './our-message-value.component.html',
  styleUrls: ['./our-message-value.component.scss']
})
export class OurMessageValueComponent implements AfterViewInit {
  @ViewChildren('cardRef') cards!: QueryList<ElementRef>;
  
  matrixSquares: { delay: number }[] = [];
  squareSize = 20;
  hoveredCard: 'vision' | 'message' | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.calculateMatrixGrid();
    }
  }

  calculateMatrixGrid() {
    // Wait a tick for layout
    setTimeout(() => {
      if (this.cards && this.cards.first) {
        const cardRect = this.cards.first.nativeElement.getBoundingClientRect();
        // Use max dimensions just in case cards differ slightly or resize
        const width = cardRect.width || 600; 
        const height = cardRect.height || 400;
        
        const numCols = Math.ceil(width / this.squareSize);
        const numRows = Math.ceil(height / this.squareSize);
        const totalSquares = numRows * numCols;
        
        this.matrixSquares = Array.from({ length: totalSquares }).map(() => ({
          delay: Math.random() * 300
        }));
      }
    });
  }

  setHover(card: 'vision' | 'message' | null) {
    this.hoveredCard = card;
  }
}