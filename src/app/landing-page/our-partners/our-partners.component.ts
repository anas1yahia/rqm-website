import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.scss']
})
export class OurPartnersComponent {
  // Map downloaded images to properties for easy use in template
  logos = {
    advancedControls: '/partners-figma/advanced-controls.png',
    qyd: '/partners-figma/qyd.png',
    riyadBankIcon: '/partners-figma/riyadbank-icon.png',
    riyadBankText: '/partners-figma/riyadbank-text.png',
    misPay: '/partners-figma/mis-pay.png',
    qassimUniv: '/partners-figma/qassim-univ.png',
    moyasarIcon: '/partners-figma/moyasar-icon.png',
    moyasarText: '/partners-figma/moyasar-text.png',
    elm: '/partners-figma/elm.png',
    googleCloud: '/partners-figma/google-cloud.png',
    unifonic: '/partners-figma/unifonic.png',
    siaj: '/partners-figma/siaj.png',
    alibabaCloud: '/partners-figma/alibaba-cloud.png',
    stc: '/partners-figma/stc.png',
    hyyakIcon: '/partners-figma/hyyak-icon.png',
    hyyakText: '/partners-figma/hyyak-text.png'
  };
}
