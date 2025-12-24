import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks = [
    {
      title: 'SERVICES_PAGE.TASKS.CARD_1_TITLE',
      desc: 'SERVICES_PAGE.TASKS.CARD_1_DESC',
      icon: '/Icon0101.svg'
    },
    {
      title: 'SERVICES_PAGE.TASKS.CARD_2_TITLE',
      desc: 'SERVICES_PAGE.TASKS.CARD_2_DESC',
      icon: '/Icon0202.svg'
    },
    {
      title: 'SERVICES_PAGE.TASKS.CARD_3_TITLE',
      desc: 'SERVICES_PAGE.TASKS.CARD_3_DESC',
      icon: '/Icon0303.svg'
    },
    {
      title: 'SERVICES_PAGE.TASKS.CARD_4_TITLE',
      desc: 'SERVICES_PAGE.TASKS.CARD_4_DESC',
      icon: '/Icon0404.svg'
    }
  ];
}
