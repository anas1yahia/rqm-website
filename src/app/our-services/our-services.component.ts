import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../global/footer/footer.component';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule, TranslateModule, FooterComponent],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {}
