import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quality-proof',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quality-proof.component.html',
  styleUrls: ['./quality-proof.component.scss']
})
export class QualityProofComponent {
  isoLogo = "iso logo.svg";
  sdaiaLogo = "sdaia logo.png";
}