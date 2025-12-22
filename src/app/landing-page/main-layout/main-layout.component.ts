import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  imgHeaderBackground = "header_bg01.png";
}