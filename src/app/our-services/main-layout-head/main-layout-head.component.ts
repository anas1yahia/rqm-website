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

    const scrollY = window.scrollY;
    
    // Background: Moves slower, fades out
    const bgTransY = scrollY * 0.2;
    const bgOpacity = Math.max(0, 1 - scrollY * 0.001);
    
    this.backgroundRef.nativeElement.style.transform = `translateY(${bgTransY}px)`;
    this.backgroundRef.nativeElement.style.opacity = bgOpacity;

    // Content (Hero): Moves faster (parallax effect), fades out differently
    const contentTransY = scrollY * 0.4;
    const contentOpacity = Math.max(0, 1 - scrollY * 0.002);
    
    this.contentRef.nativeElement.style.transform = `translateY(-${contentTransY}px)`;
    this.contentRef.nativeElement.style.opacity = contentOpacity;
  }
}
