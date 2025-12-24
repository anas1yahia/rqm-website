import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, Linkedin, Twitter, Globe, Github } from 'lucide-angular';

@Component({
  selector: 'app-contact-social',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule],
  templateUrl: './contact-social.component.html',
  styleUrls: ['./contact-social.component.scss']
})
export class ContactSocialComponent {
  readonly Linkedin = Linkedin;
  readonly Twitter = Twitter;
  readonly Medium = Globe; // Using Globe as a placeholder for Medium
  readonly Behance = Github; // Using Github as a placeholder for Behance

  socialLinks = [
    { name: 'CONTACT_US.SOCIAL.BEHANCE', icon: this.Behance, url: '#' },
    { name: 'CONTACT_US.SOCIAL.MEDIUM', icon: this.Medium, url: '#' },
    { name: 'CONTACT_US.SOCIAL.X', icon: this.Twitter, url: '#' },
    { name: 'CONTACT_US.SOCIAL.LINKEDIN', icon: this.Linkedin, url: '#' }
  ];
}
