import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-statistic-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './statistic-section.component.html',
  styleUrls: ['./statistic-section.component.scss']
})
export class StatisticSectionComponent {
  stats = [
    {
      id: '01',
      value: '+10',
      label: 'LANDING.STATISTICS.PROJECTS'
    },
    {
      id: '02',
      value: '+5',
      label: 'LANDING.STATISTICS.SECTORS'
    },
    {
      id: '03',
      value: '+10',
      label: 'LANDING.STATISTICS.CLIENTS'
    },
    {
      id: '04',
      value: '+5',
      label: 'LANDING.STATISTICS.PARTNERS'
    },
    {
      id: '05',
      value: '2',
      label: 'LANDING.STATISTICS.PRODUCTS'
    }
  ];
}
