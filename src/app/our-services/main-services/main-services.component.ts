import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './main-services.component.html',
  styleUrls: ['./main-services.component.scss']
})
export class MainServicesComponent {}
