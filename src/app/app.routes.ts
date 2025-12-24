import { Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from './landing-page/home/home.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { NotFoundComponent } from './global/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'ar', pathMatch: 'full' },
  {
    // Matcher for valid languages (ar/en)
    matcher: (url) => {
      if (url.length > 0 && ['en', 'ar'].includes(url[0].path)) {
        return {
          consumed: [url[0]],
          posParams: { lang: url[0] }
        };
      }
      return null;
    },
    children: [
      { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
      { path: 'our-story', component: OurStoryComponent, data: { animation: 'OurStoryPage' } },
      { path: 'contact-us', component: ContactUsComponent, data: { animation: 'ContactUsPage' } },
      { path: 'services', component: OurServicesComponent, data: { animation: 'ServicesPage' } }
    ]
  },
  { path: '**', component: NotFoundComponent } // Catch-all for invalid routes
];