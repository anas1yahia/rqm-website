import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appTextDecode]',
  standalone: true
})
export class TextDecodeDirective implements OnInit, OnChanges {
  @Input('appTextDecode') finalText: string = '';
  @Input() duration: number = 1000;
  
  private chars = '01'; // Binary only
  private frame = 0;
  private queue: any[] = [];
  
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.finalText && this.el.nativeElement.innerText) {
        this.finalText = this.el.nativeElement.innerText.trim();
        this.setText(this.finalText);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (isPlatformBrowser(this.platformId) && changes['finalText'] && !changes['finalText'].firstChange) {
       this.setText(this.finalText);
    } else if (isPlatformBrowser(this.platformId) && changes['finalText'] && changes['finalText'].firstChange && this.finalText) {
       // Handle case where input is provided on init
       this.setText(this.finalText);
    }
  }

  setText(newText: string) {
    const oldText = this.el.nativeElement.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  resolve: any;
  frameRequest: any;

  update() {
    let output = '';
    let complete = 0;
    
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    
    this.el.nativeElement.innerHTML = output;
    
    if (complete === this.queue.length) {
      this.resolve && this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update.bind(this));
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}