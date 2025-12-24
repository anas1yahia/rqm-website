import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { PipelineNetworkComponent } from '../pipeline-network/pipeline-network.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent, PipelineNetworkComponent, TranslateModule, RouterModule],
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent {
  arrowIcon = "info/arrow.svg";

  // Background patterns for cards
  card1Bg = "info/card1bg.svg";
  card2Bg = "bg-card.svg"; // This was already local but keep consistency if needed
  card3Bg = "info/card3bg.svg";

  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'ar';
  }

  constructor(private translate: TranslateService) {}
}