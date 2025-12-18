import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-values-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './values-card.component.html',
  styleUrls: ['./values-card.component.scss']
})
export class ValuesCardComponent {
  constructor(private translate: TranslateService) {}
}
