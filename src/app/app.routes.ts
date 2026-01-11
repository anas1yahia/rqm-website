import { Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from './landing-page/home/home.component';

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
      { 
        path: '', 
        component: HomeComponent, 
        data: { animation: 'HomePage' } 
      },
      { 
        path: 'our-story', 
        loadComponent: () => import('./our-story/our-story.component').then(m => m.OurStoryComponent), 
        data: { animation: 'OurStoryPage' } 
      },
      { 
        path: 'contact-us', 
        loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent), 
        data: { animation: 'ContactUsPage' } 
      },
      { 
        path: 'services', 
        loadComponent: () => import('./our-services/our-services.component').then(m => m.OurServicesComponent), 
        data: { animation: 'ServicesPage' } 
      },
      { 
        path: 'privacy-policy', 
        loadComponent: () => import('./privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent), 
        data: { animation: 'PrivacyPolicyPage' } 
      }
    ]
  },
  { 
    path: '**', 
    loadComponent: () => import('./global/not-found/not-found.component').then(m => m.NotFoundComponent) 
  } // Catch-all for invalid routes
];