import { Component, Input, ElementRef, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-process-card',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule],
  templateUrl: './process-card.component.html',
  styleUrls: ['./process-card.component.scss']
})
export class ProcessCardComponent implements AfterViewInit, OnDestroy {
  @Input() step: any;
  isStuck = false;
  private observer: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initObserver();
    }
  }

  private initObserver() {
    // We use a simple sentinel or threshold check. 
    // rootMargin needs to match the CSS 'top' value.
    // Since mobile might have different top values, we'll try a more flexible approach.
    
    const options = {
      threshold: [1],
      rootMargin: '-1px 0px 0px 0px' // Check if it's at the very top of its sticking point
    };

    this.observer = new IntersectionObserver(([entry]) => {
      // Logic: If the top of the element is near the sticking point
      // We check if the element is sticking by looking at its position relative to the viewport
      this.checkStuck();
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkStuck();
  }

  private checkStuck() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const rect = this.el.nativeElement.getBoundingClientRect();
    const style = window.getComputedStyle(this.el.nativeElement);
    const stickyTop = parseInt(style.top, 10) || 0;
    
    // If the distance from the top of the viewport is equal to or less than the 'top' CSS property, it's stuck
    // Adding a small 2px buffer for rounding issues
    this.isStuck = rect.top <= stickyTop + 2;
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}