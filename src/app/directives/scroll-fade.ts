import { Directive, ElementRef, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollFade]',
  standalone: true
})
export class ScrollFadeDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | undefined;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initObserver();
    }
  }

  private initObserver() {
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('in-view');
          // Optional: Stop observing once visible to run only once
          // this.observer?.unobserve(this.el.nativeElement);
        } else {
          // Optional: Remove class to animate out when scrolling away
          // this.el.nativeElement.classList.remove('in-view');
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}