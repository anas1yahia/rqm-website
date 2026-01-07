import { Component, Input, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Detect when the element is stuck
    // Threshold [1] and rootMargin that matches the 'top: 150px' offset
    this.observer = new IntersectionObserver(
      ([entry]) => {
        // When the intersection ratio is less than 1 at the specified margin,
        // it means the element has started to stick.
        this.isStuck = entry.intersectionRatio < 1 && entry.boundingClientRect.top <= 151;
      },
      { 
        threshold: [1],
        // Margin top -151px to detect precisely when it hits top: 150px
        rootMargin: '-151px 0px 0px 0px' 
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
