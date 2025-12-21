import { Routes } from '@angular/router';
import { HomeComponent } from './landing-page/home/home.component';
import { OurStoryComponent } from './our-story/our-story.component';

export const routes: Routes = [
  { path: '', redirectTo: 'ar', pathMatch: 'full' },
  { path: ':lang', component: HomeComponent },
  { path: ':lang/our-story', component: OurStoryComponent }
];
