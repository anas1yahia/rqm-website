import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  // Controls the presence in DOM (ngIf)
  isTransitionVisible = signal(false);
  // Controls the CSS opacity/active class
  isTransitionActive = signal(false);

  startTransition() {
    this.isTransitionVisible.set(true);
    // Slight delay to allow DOM render before adding active class for CSS transition
    setTimeout(() => {
      this.isTransitionActive.set(true);
    }, 10);
  }

  endTransition() {
    this.isTransitionActive.set(false);
    // Wait for CSS transition (0.4s) before removing from DOM
    setTimeout(() => {
      this.isTransitionVisible.set(false);
    }, 400);
  }
}
