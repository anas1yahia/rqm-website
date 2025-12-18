import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronLeft } from 'lucide-angular';
import { ParallaxDirective } from '../directives/parallax';
import { TextDecodeDirective } from '../directives/text-decode';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ParallaxDirective, TextDecodeDirective, TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  imgIcon = "hero/icon.png";
  imgVector = "hero/vector0.svg";
  imgVector1 = "hero/vector1.svg";
  imgVector2 = "hero/vector2.svg";
  imgVector3 = "hero/vector3.svg";
  imgVector4 = "hero/vector4.svg";
  imgVector5 = "hero/vector5.svg";
  imgVector6 = "hero/vector6.svg";
  imgVector7 = "hero/vector7.svg";
  imgVector8 = "hero/vector8.svg";
  imgVector9 = "hero/vector9.svg";
  imgVector10 = "hero/vector10.svg";
  imgVector11 = "hero/vector11.svg";

  // For button icon
  readonly ChevronLeft = ChevronLeft;

  isLoaded: boolean = false;
  matrixSquares: { delay: number }[] = [];
  squareSize: number = 20; // Default square size, can be adjusted
  private numRows: number = 0;
  private numCols: number = 0;

  constructor(private el: ElementRef, private translate: TranslateService) {}

  ngOnInit() {
    this.calculateMatrixGrid();
    // Trigger animation after a short delay to ensure rendering
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

  calculateMatrixGrid() {
    // Use setTimeout to ensure DOM is rendered and dimensions are available
    setTimeout(() => {
      const heroRect = this.el.nativeElement.getBoundingClientRect();
      this.numCols = Math.ceil(heroRect.width / this.squareSize);
      this.numRows = Math.ceil(heroRect.height / this.squareSize);

      const totalSquares = this.numRows * this.numCols;
      this.matrixSquares = Array.from({ length: totalSquares }).map((_, i) => ({
        // Stagger animation based on index
        delay: Math.random() * 500 // Random delay up to 500ms for each square
      }));
    }, 0);
  }
}
