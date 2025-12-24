import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ChevronLeft, ChevronRight, ArrowUpLeft, ArrowLeft } from 'lucide-angular';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { ButtonComponent } from '../../global/button/button.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, TranslateModule, ButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
  @Input() features: string[] = [];
  @Input() logo: string = '';
  @Input() themeColor: string = '#62c4aa'; // Default to green
  @Input() isSmall: boolean = false; // For the "more solutions" card
  
  isLoading: boolean = true; // Added for skeleton loading

  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;
  readonly ArrowUpLeft = ArrowUpLeft;
  readonly ArrowLeft = ArrowLeft;

  currentIcon = ChevronLeft; // Default to Arabic direction (Left)
  private langSub: Subscription | undefined;

  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'ar';
  }

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Set initial icon based on current language
    this.updateIcon(this.translate.currentLang || this.translate.defaultLang || '');

    // Listen for language changes
    this.langSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateIcon(event.lang);
    });
  }

  ngOnDestroy() {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  private updateIcon(lang: string) {
    if (lang === 'en') {
      this.currentIcon = ChevronRight;
    } else {
      this.currentIcon = ChevronLeft;
    }
  }

  onImageLoad() {
    this.isLoading = false; // Set to false when the image loads
  }
}
