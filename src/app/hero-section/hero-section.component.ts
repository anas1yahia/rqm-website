import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronLeft } from 'lucide-angular';
import { ParallaxDirective } from '../directives/parallax';
import { TextDecodeDirective } from '../directives/text-decode';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ParallaxDirective, TextDecodeDirective],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  imgIcon = "https://www.figma.com/api/mcp/asset/4d31c854-20c7-471e-b568-00d212ff6108";
  imgVector = "https://www.figma.com/api/mcp/asset/f6533a7e-fea0-410b-b752-ea3cbcc63d9e";
  imgVector1 = "https://www.figma.com/api/mcp/asset/5a3d93a1-eb56-4ace-9efe-0c75d7214696";
  imgVector2 = "https://www.figma.com/api/mcp/asset/74ed1ef1-86ea-4965-99cb-ea476f80a6fa";
  imgVector3 = "https://www.figma.com/api/mcp/asset/270de2a5-0260-4b4f-9f40-ea41c0667407";
  imgVector4 = "https://www.figma.com/api/mcp/asset/806ee26c-8863-4ae6-9ca0-07a6b53d8cfb";
  imgVector5 = "https://www.figma.com/api/mcp/asset/f79efa76-1ba7-488e-82ad-0482c5d5748a";
  imgVector6 = "https://www.figma.com/api/mcp/asset/cc7b5f79-11b2-4d25-bf12-0f68de7786e4";
  imgVector7 = "https://www.figma.com/api/mcp/asset/179cac33-b5b6-449b-94ef-3fa9ca3a3d59";
  imgVector8 = "https://www.figma.com/api/mcp/asset/87cefde1-f1ec-4ae6-a2b1-149bf1301e1b";
  imgVector9 = "https://www.figma.com/api/mcp/asset/be192fec-b07e-4061-b63b-c3a6bf5829e9";
  imgVector10 = "https://www.figma.com/api/mcp/asset/c480f03b-1793-4934-a131-b2c3b21b635d";
  imgVector11 = "https://www.figma.com/api/mcp/asset/b9e27188-5da8-4c58-8bbb-83158d883b96";

  // For button icon
  readonly ChevronLeft = ChevronLeft;

  isLoaded: boolean = false;
  matrixSquares: { delay: number }[] = [];
  squareSize: number = 20; // Default square size, can be adjusted
  private numRows: number = 0;
  private numCols: number = 0;

  constructor(private el: ElementRef) {}

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
