import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

// Layout & Sections
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { InfoSectionComponent } from '../info-section/info-section.component';
import { ClientSectionComponent } from '../client-section/client-section.component';
import { TransformationProjectComponent } from '../transformation-project/transformation-project.component';
import { ProcessSectionComponent } from '../process-section/process-section.component';
import { QualityProofComponent } from '../quality-proof/quality-proof.component';
import { OurPartnersComponent } from '../our-partners/our-partners.component';
import { FooterComponent } from '../../global/footer/footer.component';

// Directives
import { ScrollFadeDirective } from '../../directives/scroll-fade';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MainLayoutComponent,
    InfoSectionComponent,
    ClientSectionComponent,
    TransformationProjectComponent,
    ProcessSectionComponent,
    QualityProofComponent,
    OurPartnersComponent,
    FooterComponent,
    ScrollFadeDirective
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const lang = params['lang'];
      if (lang && (lang === 'ar' || lang === 'en')) {
        if (this.translate.currentLang !== lang) {
          this.translate.use(lang);
          // Also update direction if not already handled by App/Header
           const dir = lang === 'ar' ? 'rtl' : 'ltr';
           document.documentElement.dir = dir;
           document.documentElement.lang = lang;
        }
      }
    });
  }
}

