import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollFadeDirective } from '../../directives/scroll-fade';
import { ButtonComponent } from '../../global/button/button.component';

@Component({
  selector: 'app-your-starting',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollFadeDirective, ButtonComponent],
  templateUrl: './your-starting.component.html',
  styleUrls: ['./your-starting.component.scss']
})
export class YourStartingComponent {}
