import { Component, Inject, PLATFORM_ID, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'app-main-layout-head',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent],
  templateUrl: './main-layout-head.component.html',
  styleUrls: ['./main-layout-head.component.scss']
})
export class MainLayoutHeadComponent implements AfterViewInit {
  @ViewChild('background', { static: false }) backgroundRef!: ElementRef;
  @ViewChild('content', { static: false }) contentRef!: ElementRef;

  imgHeaderBackground = "/header_bg01.png";

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    if (!this.backgroundRef || !this.contentRef) return;

    // Use requestAnimationFrame for smoother performance
    window.requestAnimationFrame(() => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      // Background: Slow subtle move to create depth
      const bgTransY = scrollY * 0.15;
      this.backgroundRef.nativeElement.style.transform = `translate3d(0, ${bgTransY}px, 0)`;
      
      // Content (Hero): Moves up faster than scroll to create "sliding under" or "lifting" effect
      // and fades out as it leaves the top area
      const contentTransY = scrollY * 0.3;
      const contentOpacity = Math.max(0, 1 - (scrollY / 600)); // Fade out over 600px of scroll
      
      this.contentRef.nativeElement.style.transform = `translate3d(0, -${contentTransY}px, 0)`;
      this.contentRef.nativeElement.style.opacity = contentOpacity.toString();
    });
  }
}
