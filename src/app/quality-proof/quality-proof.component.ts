import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-quality-proof',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './quality-proof.component.html',
  styleUrls: ['./quality-proof.component.scss']
})
export class QualityProofComponent {
  isoLogo = "./iso-logo.svg";
  sdaiaLogo = "./sdaia-logo.png";
}