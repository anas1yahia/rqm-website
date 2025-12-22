import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollFadeDirective } from '../../directives/scroll-fade';

@Component({
  selector: 'app-about-rqm',
  standalone: true,
  imports: [CommonModule, ScrollFadeDirective],
  templateUrl: './about-rqm.component.html',
  styleUrls: ['./about-rqm.component.scss']
})
export class AboutRqmComponent {}
