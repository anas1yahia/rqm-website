import { Component, ElementRef, ViewChild, HostListener, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ButtonComponent } from '../../global/button/button.component';
import { TextDecodeDirective } from '../../directives/text-decode';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TextDecodeDirective],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('illustration', { static: false }) illustrationRef!: ElementRef;
  @ViewChild('overlayCard', { static: false }) overlayCardRef!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    if (!this.illustrationRef || !this.overlayCardRef) return;

    const scrollY = window.scrollY;
    
    // Illustration: Faster movement (upwards), Faster fade
    const illTransY = scrollY * 0.4;
    // Base opacity is 0.6 as per Figma design. Fade out from there.
    const illOpacity = Math.max(0, 0.6 - scrollY * 0.0025);
    
    this.illustrationRef.nativeElement.style.transform = `translateY(-${illTransY}px)`;
    this.illustrationRef.nativeElement.style.opacity = illOpacity;

    // Overlay Card: Slower movement, Slower fade
    const cardTransY = scrollY * 0.15;
    const cardOpacity = Math.max(0, 1 - scrollY * 0.0012);
    
    this.overlayCardRef.nativeElement.style.transform = `translateY(-${cardTransY}px)`;
    this.overlayCardRef.nativeElement.style.opacity = cardOpacity;
  }
}
