import { Routes } from '@angular/router';
import { HomeComponent } from './landing-page/home/home.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { NotFoundComponent } from './global/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'ar', pathMatch: 'full' },
  { path: ':lang', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: ':lang/our-story', component: OurStoryComponent, data: { animation: 'OurStoryPage' } },
  { path: '**', component: NotFoundComponent } // Wildcard route for 404
];
