import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../global/footer/footer.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, TranslateModule, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {}
