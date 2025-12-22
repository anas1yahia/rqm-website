import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-our-duty',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './our-duty.component.html',
  styleUrls: ['./our-duty.component.scss']
})
export class OurDutyComponent {}