import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../global/footer/footer.component';
import { ContactFormComponent } from './ui/contact-form/contact-form.component';
import { ContactInfoComponent } from './ui/contact-info/contact-info.component';
import { ContactSocialComponent } from './ui/contact-social/contact-social.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, TranslateModule, FooterComponent, ContactFormComponent, ContactInfoComponent, ContactSocialComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {}
