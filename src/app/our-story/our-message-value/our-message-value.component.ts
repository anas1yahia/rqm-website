import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-our-message-value',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './our-message-value.component.html',
  styleUrls: ['./our-message-value.component.scss']
})
export class OurMessageValueComponent {}