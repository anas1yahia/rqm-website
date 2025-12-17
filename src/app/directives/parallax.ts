import { Directive, ElementRef, Input, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input('appParallax') speed: number | string = 0.5;
  
  private initialTop: number = 0;
  private scrollSub: Subscription | undefined;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initialTop = this.el.nativeElement.getBoundingClientRect().top + window.scrollY;
      this.el.nativeElement.style.willChange = 'transform';
      
      this.scrollSub = fromEvent(window, 'scroll').subscribe(() => {
        this.onWindowScroll();
      });
      
      // Trigger once to set initial position
      this.onWindowScroll();
    }
  }

  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const factor = Number(this.speed) * 0.1; 
    const yPos = scrollPosition * factor;
    this.el.nativeElement.style.transform = `translateY(${yPos}px)`;
  }

  ngOnDestroy() {
    if (this.scrollSub) {
      this.scrollSub.unsubscribe();
    }
  }
}
