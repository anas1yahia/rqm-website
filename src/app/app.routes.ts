import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'ar', pathMatch: 'full' },
  { path: ':lang', component: HomeComponent }
];
