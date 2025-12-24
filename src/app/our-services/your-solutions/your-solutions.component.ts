import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../global/button/button.component';

@Component({
  selector: 'app-your-solutions',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule, ButtonComponent],
  templateUrl: './your-solutions.component.html',
  styleUrls: ['./your-solutions.component.scss']
})
export class YourSolutionsComponent {
  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'ar';
  }

  constructor(private translate: TranslateService) {}
}
