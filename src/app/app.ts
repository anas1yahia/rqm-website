import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from './services/ui.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatrixGridOverlayComponent } from './global/ui/matrix-grid-overlay/matrix-grid-overlay.component';
import { HeaderComponent } from './global/header/header.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatrixGridOverlayComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('rqm-website');

  constructor(
    private translate: TranslateService,
    public uiService: UiService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.translate.setDefaultLang('ar');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event: Event) => {
        // Navigation Start -> Show Overlay
        if (event instanceof NavigationStart) {
          this.uiService.startTransition();
        }

        // Navigation End/Cancel/Error -> Update Lang (if needed) and Hide Overlay
        if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
          if (event instanceof NavigationEnd) {
            this.updateLanguageFromUrl(event.urlAfterRedirects || event.url);
          }
          // Small delay to let the overlay finish appearing if nav was super fast
          setTimeout(() => {
            this.uiService.endTransition();
          }, 600); 
        }
      });
    }
  }

  private updateLanguageFromUrl(url: string) {
    const segments = url.split('/');
    if (segments.length > 1) {
      const lang = segments[1];
      if (['en', 'ar'].includes(lang)) {
        this.translate.use(lang);
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = lang;
      }
    }
  }
}
