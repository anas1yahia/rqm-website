import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../global/footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MainLayoutHeadComponent } from './main-layout-head/main-layout-head.component';
import { MainServicesComponent } from './main-services/main-services.component';
import { AiServicesComponent } from './ai-services/ai-services.component';
import { TasksComponent } from './tasks/tasks.component';
import { YourSolutionsComponent } from './your-solutions/your-solutions.component';
import { IsThisYourSolutionComponent } from './is-this-your-solution/is-this-your-solution.component';
import { ScrollFadeDirective } from '../directives/scroll-fade';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule, TranslateModule, FooterComponent, MainLayoutHeadComponent, MainServicesComponent, AiServicesComponent, TasksComponent, YourSolutionsComponent, IsThisYourSolutionComponent, ScrollFadeDirective],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {}
