import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { InfoSectionComponent } from '../info-section/info-section.component';
import { TransformationProjectComponent } from '../transformation-project/transformation-project.component';
import { ProcessSectionComponent } from '../process-section/process-section.component';
import { OurProductsComponent } from '../our-products/our-products.component';
import { QualityProofComponent } from '../quality-proof/quality-proof.component';
import { OurPartnersComponent } from '../our-partners/our-partners.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollFadeDirective } from '../directives/scroll-fade';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent, InfoSectionComponent, TransformationProjectComponent, ProcessSectionComponent, OurProductsComponent, QualityProofComponent, OurPartnersComponent, FooterComponent, ScrollFadeDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}

