import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowUp } from 'lucide-angular';
import { TransformationCardComponent } from '../transformation-card/transformation-card.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { ButtonComponent } from '../../global/button/button.component';

@Component({
  selector: 'app-transformation-project',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, TransformationCardComponent, TranslateModule, ButtonComponent],
  templateUrl: './transformation-project.component.html',
  styleUrls: ['./transformation-project.component.scss']
})
export class TransformationProjectComponent {
  readonly ArrowUp = ArrowUp;

  openBookingLink() {
    window.open('https://outlook.office.com/book/TechnicalConsulting@rqm.sa/?ismsaljsauthenabled=true', '_blank');
  }

  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'ar';
  }

  constructor(private translate: TranslateService) {}
}
