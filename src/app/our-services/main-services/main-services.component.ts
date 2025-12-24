import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LucideAngularModule, ChevronLeft } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../global/button/button.component';

@Component({
  selector: 'app-main-services',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule, RouterModule, ButtonComponent],
  templateUrl: './main-services.component.html',
  styleUrls: ['./main-services.component.scss']
})
export class MainServicesComponent {
  readonly ChevronLeft = ChevronLeft;
  imgService = '/01Service.svg';

  services = [
    'SERVICES_PAGE.MAIN.LIST.WEB_MOBILE',
    'SERVICES_PAGE.MAIN.LIST.INTERNAL_PLATFORMS',
    'SERVICES_PAGE.MAIN.LIST.INTEGRATION',
    'SERVICES_PAGE.MAIN.LIST.ANALYSIS',
    'SERVICES_PAGE.MAIN.LIST.UI_UX'
  ];

  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'ar';
  }

  constructor(private translate: TranslateService) {}
}
