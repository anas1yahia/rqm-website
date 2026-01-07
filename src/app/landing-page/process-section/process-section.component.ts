import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, BrainCircuit, Hammer, ShieldCheck, BarChart3 } from 'lucide-angular';
import { ProcessCardComponent } from '../process-card/process-card.component';
import { ButtonComponent } from '../../global/button/button.component';

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule, ProcessCardComponent, ButtonComponent],
  templateUrl: './process-section.component.html',
  styleUrls: ['./process-section.component.scss']
})
export class ProcessSectionComponent {
  steps = [
    {
      id: '001',
      titleKey: 'LANDING.VALUES.ANALYSIS_CARD_TITLE',
      descKey: 'LANDING.VALUES.ANALYSIS_CARD_DESC',
      icon: BrainCircuit
    },
    {
      id: '002',
      titleKey: 'LANDING.VALUES.PERFECTION_CARD_TITLE',
      descKey: 'LANDING.VALUES.PERFECTION_CARD_DESC',
      icon: Hammer
    },
    {
      id: '003',
      titleKey: 'LANDING.VALUES.COMMITMENT_CARD_TITLE',
      descKey: 'LANDING.VALUES.COMMITMENT_CARD_DESC',
      icon: ShieldCheck
    },
    {
      id: '004',
      titleKey: 'LANDING.VALUES.SUSTAINABILITY_CARD_TITLE',
      descKey: 'LANDING.VALUES.SUSTAINABILITY_CARD_DESC',
      icon: BarChart3
    }
  ];
}