import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from './services/ui.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatrixGridOverlayComponent } from './global/ui/matrix-grid-overlay/matrix-grid-overlay.component';
import { HeaderComponent } from './global/header/header.component';
import { Meta, Title } from '@angular/platform-browser';

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
    private meta: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.translate.setDefaultLang('ar');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      let lastUrl = this.router.url;

      this.router.events.subscribe((event: Event) => {
        // Navigation Start -> Show Overlay
        if (event instanceof NavigationStart) {
          const isToContact = event.url.includes('contact-us');
          const isFromContact = lastUrl.includes('contact-us');
          
          if (!isToContact && !isFromContact) {
            this.uiService.startTransition();
          }
        }

        // Navigation End/Cancel/Error -> Update Lang (if needed) and Hide Overlay
        if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
          if (event instanceof NavigationEnd) {
            lastUrl = event.urlAfterRedirects || event.url;
            this.updateLanguageFromUrl(lastUrl);
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
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;

        // Dynamic SEO Update
        const title = lang === 'ar' ? 'رقم لحلول الأعمال - RQM Solution' : 'RQM Solution - Business Solutions';
        const description = lang === 'ar' 
          ? 'تمكين الأعمال بحلول رقمية ذكية وآمنة، تُحوّل التقنية إلى تشغيل فعلي، وتدعم اتخاذ القرار بثقة وموثوقية عالية.'
          : 'Empowering businesses with smart and secure digital solutions that turn technology into actual operations and support decision-making with high reliability.';
        
        this.titleService.setTitle(title);
        this.meta.updateTag({ name: 'description', content: description });
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ property: 'twitter:title', content: title });
        this.meta.updateTag({ property: 'twitter:description', content: description });
      }
    }
  }
}
