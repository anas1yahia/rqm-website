import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ai-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './ai-services.component.html',
  styleUrls: ['./ai-services.component.scss']
})
export class AiServicesComponent {}
