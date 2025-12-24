import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ChevronLeft } from 'lucide-angular';
import { ButtonComponent } from '../../global/button/button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule, LucideAngularModule, ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  readonly ChevronLeft = ChevronLeft;

  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'ar';
  }

  constructor(private translate: TranslateService) {}
}
