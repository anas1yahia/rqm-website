import { Component, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { LucideAngularModule, Menu, X, Sun, Moon } from 'lucide-angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UiService } from '../services/ui.service';
import { ThemeService } from '../services/theme.service';

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
  logoDark = "header/logo-white.svg"; // Standard path
  logoLight = "header-logo-light.svg"; // Colored logo
  backgroundBorder = "header/bg-border.png"; // Standard path
  
  isMenuOpen = false;
  isScrolled = false;
  readonly MenuIcon = Menu;
  readonly XIcon = X;
  readonly SunIcon = Sun;
  readonly MoonIcon = Moon;
  currentLang: string = 'en';

  constructor(
    private translate: TranslateService,
    private uiService: UiService,
    private router: Router,
    private route: ActivatedRoute,
    public themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.currentLang = this.translate.currentLang || this.translate.defaultLang || 'en';
    this.updateDirection(this.currentLang);
    
    // Subscribe to lang changes to update local state (e.g. if changed via URL)
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      this.updateDirection(event.lang);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      // 500px is approx height of hero/main layout visible area before content
      this.isScrolled = window.scrollY > 500;
    }
  }

  get currentLogo(): string {
    // If scrolled past hero AND in light mode, use the colored logo
    if (this.isScrolled && this.themeService.currentTheme() === 'light') {
      return this.logoLight;
    }
    // Otherwise (Top of page OR Dark Mode) use the White logo
    return this.logoDark;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  switchLanguage(lang: string) {
    if (this.currentLang === lang) return;

    // Start transition (fade to black)
    this.uiService.startTransition();

    // Wait for fade in
    setTimeout(() => {
      // Navigate to the new language route
      // preserveFragment: true keeps the #hash (e.g. #about) if it exists
      this.router.navigate([lang], { preserveFragment: true }).then(() => {
          this.currentLang = lang;
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
