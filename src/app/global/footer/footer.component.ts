import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Linkedin, Instagram, Mail, X } from 'lucide-angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  bgShape = '/footer/bg-shape.png';
  logoPart1 = '/footer/logo-1.png';
  logoPart2 = '/footer/logo-2.png';
  divider = '/footer/divider.png';
  
  // New assets
  footerLogoBg = '/footer/footer-logo.svg'; // The bottom left one
  mainFooterLogo = '/footer/logowhite-footer.svg'; // The replacement for the main logo

  readonly Linkedin = Linkedin;
  readonly Instagram = Instagram;
  readonly Mail = Mail;
  readonly X = X;

  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'ar';
  }

  constructor(private translate: TranslateService) {}
}
