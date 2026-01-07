import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, Linkedin, Instagram, X } from 'lucide-angular';

@Component({
  selector: 'app-contact-social',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule],
  templateUrl: './contact-social.component.html',
  styleUrls: ['./contact-social.component.scss']
})
export class ContactSocialComponent {
  readonly Linkedin = Linkedin;
  readonly Instagram = Instagram;
  readonly X = X;

  socialLinks = [
    { 
      name: 'CONTACT_US.SOCIAL.LINKEDIN', 
      icon: this.Linkedin, 
      url: 'https://www.linkedin.com/company/byrqm-sa' 
    },
    { 
      name: 'CONTACT_US.SOCIAL.INSTAGRAM', 
      icon: this.Instagram, 
      url: 'https://www.instagram.com/byrqm_sa/' 
    },
    { 
      name: 'CONTACT_US.SOCIAL.X', 
      icon: this.X, 
      url: 'https://x.com/byrqm_sa' 
    }
  ];
}