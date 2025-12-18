import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { LucideAngularModule, Menu, X } from 'lucide-angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('menuState', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('sheetState', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s cubic-bezier(0.32, 0.72, 0, 1)', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ transform: 'translateY(100%)' }))
      ])
    ]),
    trigger('navItems', [
      transition(':enter', [
        query('a', [
          style({ transform: 'translateY(50px) scale(0.9)', opacity: 0 }),
          stagger('150ms', [
            animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HeaderComponent {
  logoImage = "https://www.figma.com/api/mcp/asset/b81f1129-1ac8-4da8-b8e2-e5421ea91484";
  backgroundBorder = "https://www.figma.com/api/mcp/asset/15c023cd-5554-4a58-b669-8a4f515af04e";
  
  isMenuOpen = false;
  readonly MenuIcon = Menu;
  readonly XIcon = X;
  currentLang: string = 'en';

  constructor(
    private translate: TranslateService,
    private uiService: UiService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.currentLang = this.translate.currentLang || this.translate.defaultLang || 'en';
    this.updateDirection(this.currentLang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  switchLanguage(lang: string) {
    if (this.currentLang === lang) return;

    // Start transition (fade to black)
    this.uiService.startTransition();

    // Wait for fade in (match CSS duration)
    setTimeout(() => {
      this.translate.use(lang).subscribe(() => {
        this.currentLang = lang;
        this.updateDirection(lang);
        
        // Wait a bit for layout to settle, then fade out
        setTimeout(() => {
          this.uiService.endTransition();
        }, 600);
      });
    }, 800);
  }

  private updateDirection(lang: string) {
    if (isPlatformBrowser(this.platformId)) {
      const dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = dir;
      document.documentElement.lang = lang;
    }
  }
}
