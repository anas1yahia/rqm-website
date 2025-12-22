import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollFadeDirective } from '../../directives/scroll-fade';

@Component({
  selector: 'app-about-rqm',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollFadeDirective],
  templateUrl: './about-rqm.component.html',
  styleUrls: ['./about-rqm.component.scss']
})
export class AboutRqmComponent {}
