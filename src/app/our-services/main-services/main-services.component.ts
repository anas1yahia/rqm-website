import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LucideAngularModule, ChevronLeft } from 'lucide-angular';

@Component({
  selector: 'app-main-services',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule],
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

  constructor(private translate: TranslateService) {}
}
