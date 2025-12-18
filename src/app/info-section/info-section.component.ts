import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { PipelineNetworkComponent } from '../pipeline-network/pipeline-network.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent, PipelineNetworkComponent, TranslateModule],
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent {
  // Common Assets
  arrowIcon = "https://www.figma.com/api/mcp/asset/d4300ae8-e7b8-4204-815f-d4d9f2efa1e7";

  // Card 1 (Cybersecurity) - Left visually
  // From node 5489:6494 -> imgGroupGroup2
  card1Bg = "https://www.figma.com/api/mcp/asset/60d44ed3-91ef-4c83-af3b-a7b9912a974a";

  // Card 3 (Digital Solutions) - Right
  // From node 5489:6580 -> imgGroupGroup1
  card3Bg = "https://www.figma.com/api/mcp/asset/9ea7cb14-0266-44f1-b35d-414e307f6ca9";

  constructor(private translate: TranslateService) {}
}