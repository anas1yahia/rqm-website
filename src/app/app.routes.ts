import { Routes } from '@angular/router';
import { HomeComponent } from './landing-page/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'ar', pathMatch: 'full' },
  { path: ':lang', component: HomeComponent }
];
