import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'app-ai-services',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule],
  templateUrl: './ai-services.component.html',
  styleUrls: ['./ai-services.component.scss']
})
export class AiServicesComponent implements OnInit, OnDestroy {
  readonly ChevronDown = ChevronDown;
  activeIndex: number | null = 0; // Default first one open
  private autoSlideInterval: any;
  private readonly SLIDE_DURATION = 3000; // 3 seconds

  servicesList = [
    'DISCOVERY',
    'DESIGN',
    'BUILD',
    'DATA',
    'SECURITY',
    'AUTOMATION',
    'PRODUCT'
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.stopAutoSlide(); // Ensure no multiple intervals
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, this.SLIDE_DURATION);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private nextSlide() {
    if (this.activeIndex === null) {
      this.activeIndex = 0;
    } else {
      this.activeIndex = (this.activeIndex + 1) % this.servicesList.length;
    }
  }

  setActive(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = null;
    } else {
      this.activeIndex = index;
    }
    this.resetAutoSlide();
  }
  
  selectService(index: number) {
    this.activeIndex = index;
    this.resetAutoSlide();
  }

  resetAutoSlide() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }
}