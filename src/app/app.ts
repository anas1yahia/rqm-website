import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, Event } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from './services/ui.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatrixRainComponent } from './landing-page/ui/matrix-rain/matrix-rain.component';
import { glitchAnimation } from './route-animations';
import { HeaderComponent } from './global/header/header.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatrixRainComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [glitchAnimation]
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
    // Don't force 'ar' here blindly if URL has 'en', handled in ngOnInit
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.updateLanguageFromUrl(event.urlAfterRedirects || event.url);
      });
    }
  }

  private updateLanguageFromUrl(url: string) {
    // Expected format: /lang/path...
    // split('/') -> ["", "lang", "path"]
    const segments = url.split('/');
    if (segments.length > 1) {
      const lang = segments[1];
      if (['en', 'ar'].includes(lang)) {
        this.translate.use(lang);
        
        // Update document direction
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = lang;
      }
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
