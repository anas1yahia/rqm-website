import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../global/footer/footer.component';
import { MainLayoutHeadComponent } from './main-layout-head/main-layout-head.component';
import { AboutRqmComponent } from './about-rqm/about-rqm.component';
import { OurMessageValueComponent } from './our-message-value/our-message-value.component';
import { YourSuccessPartnerComponent } from './your-success-partner/your-success-partner.component';
import { OurDutyComponent } from './our-duty/our-duty.component';
import { OurPromiseComponent } from './our-promise/our-promise.component';
import { YourStartingComponent } from './your-starting/your-starting.component';
import { ScrollFadeDirective } from '../directives/scroll-fade';

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [
    CommonModule, 
    TranslateModule, 
    FooterComponent, 
    MainLayoutHeadComponent, 
    AboutRqmComponent, 
    OurMessageValueComponent, 
    YourSuccessPartnerComponent, 
    OurDutyComponent,
    OurPromiseComponent,
    YourStartingComponent,
    ScrollFadeDirective
  ],
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent {}
