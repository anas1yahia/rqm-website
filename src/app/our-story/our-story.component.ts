import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../global/footer/footer.component';
import { MainLayoutHeadComponent } from './main-layout-head/main-layout-head.component';

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [CommonModule, TranslateModule, FooterComponent, MainLayoutHeadComponent],
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent {}
