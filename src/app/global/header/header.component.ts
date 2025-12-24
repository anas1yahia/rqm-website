import { Component, Inject, PLATFORM_ID, HostListener, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { LucideAngularModule, Menu, X, Sun, Moon } from 'lucide-angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UiService } from '../../services/ui.service';
import { ThemeService } from '../../services/theme.service';
import { filter } from 'rxjs/operators';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, TranslateModule, ButtonComponent],
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
export class HeaderComponent implements OnInit {
  logoDark = "/footer/logowhite-footer.svg"; // Use working footer logo path
  logoLight = "/header-logo-light.svg"; // Colored logo
  backgroundBorder = "/header/bg-border.png";

  isMenuOpen = false;
  isScrolled = false;
  isContactPage = false;
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

  ngOnInit() {
    this.checkIfContactPage(this.router.url);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.checkIfContactPage(event.urlAfterRedirects || event.url);
    });
  }

  private checkIfContactPage(url: string) {
    this.isContactPage = url.includes('contact-us');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      // 500px is approx height of hero/main layout visible area before content
      this.isScrolled = window.scrollY > 500;
    }
  }

  get isLightHeader(): boolean {
    // Show light header (white bg, dark text) if:
    // 1. Theme is Light AND (Scrolled OR It's Contact Page which has no dark hero)
    return this.themeService.currentTheme() === 'light' && (this.isScrolled || this.isContactPage);
  }

  get currentLogo(): string {
    if (this.isLightHeader) {
      return this.logoLight;
    }
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
      // Get current URL tree
      const urlTree = this.router.parseUrl(this.router.url);
      const segments = urlTree.root.children['primary'] ? urlTree.root.children['primary'].segments : [];
      
      // Construct new path array: [newLang, ...restOfPath]
      const newSegments = [lang];
      if (segments.length > 1) {
        for (let i = 1; i < segments.length; i++) {
          newSegments.push(segments[i].path);
        }
      }

      // Navigate to the new language route
      this.router.navigate(newSegments, { 
        queryParams: urlTree.queryParams,
        fragment: urlTree.fragment || undefined 
      }).then(() => {
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
