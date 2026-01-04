import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-client-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './client-section.component.html',
  styleUrls: ['./client-section.component.scss']
})
export class ClientSectionComponent {
  darkClients: string[] = [
    'clients/عملاء رقم-01-1.svg',
    'clients/عملاء رقم-02-1.svg',
    'clients/عملاء رقم-03-1.svg',
    'clients/عملاء رقم-04-1.svg',
    'clients/عملاء رقم-05-1.svg'
  ];

  lightClients: string[] = [
    'clients/عملاء رقم-01.svg',
    'clients/عملاء رقم-02.svg',
    'clients/عملاء رقم-03.svg',
    'clients/عملاء رقم-04.svg',
    'clients/عملاء رقم-05.svg'
  ];

  constructor(private themeService: ThemeService) {}

  currentClients = computed(() => {
    return this.themeService.currentTheme() === 'dark' ? this.darkClients : this.lightClients;
  });
}
