import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LucideAngularModule, ChevronLeft } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../global/button/button.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-main-services',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule, RouterModule, ButtonComponent],
  templateUrl: './main-services.component.html',
  styleUrls: ['./main-services.component.scss']
})
export class MainServicesComponent {
  readonly ChevronLeft = ChevronLeft;

  services = [
    {
      key: 'ENABLEMENT',
      title: 'SERVICES_PAGE.MAIN.LIST.ENABLEMENT.TITLE',
      details: 'SERVICES_PAGE.MAIN.LIST.ENABLEMENT.DETAILS'
    },
    {
      key: 'SMART_SOLUTIONS',
      title: 'SERVICES_PAGE.MAIN.LIST.SMART_SOLUTIONS.TITLE',
      details: 'SERVICES_PAGE.MAIN.LIST.SMART_SOLUTIONS.DETAILS'
    },
    {
      key: 'SECURITY',
      title: 'SERVICES_PAGE.MAIN.LIST.SECURITY.TITLE',
      details: 'SERVICES_PAGE.MAIN.LIST.SECURITY.DETAILS'
    },
    {
      key: 'INNOVATION',
      title: 'SERVICES_PAGE.MAIN.LIST.INNOVATION.TITLE',
      details: 'SERVICES_PAGE.MAIN.LIST.INNOVATION.DETAILS'
    }
  ];

  get imgService(): string {
    return this.themeService.currentTheme() === 'light' ? '/01ServicesLight.svg' : '/01Service.svg';
  }

  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'ar';
  }

  constructor(
    private translate: TranslateService,
    private themeService: ThemeService
  ) {}
}
