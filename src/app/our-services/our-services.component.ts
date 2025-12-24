import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../global/footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MainLayoutHeadComponent } from './main-layout-head/main-layout-head.component';
import { MainServicesComponent } from './main-services/main-services.component';
import { AiServicesComponent } from './ai-services/ai-services.component';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule, TranslateModule, FooterComponent, MainLayoutHeadComponent, MainServicesComponent, AiServicesComponent],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {}
