import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../global/header/header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'app-main-layout-head',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroSectionComponent],
  templateUrl: './main-layout-head.component.html',
  styleUrls: ['./main-layout-head.component.scss']
})
export class MainLayoutHeadComponent {}
