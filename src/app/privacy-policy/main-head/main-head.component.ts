import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-head',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './main-head.component.html',
  styleUrls: ['./main-head.component.scss']
})
export class MainHeadComponent {}
