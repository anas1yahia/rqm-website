import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, BrainCircuit, Hammer, ShieldCheck, BarChart3 } from 'lucide-angular';
import { ProcessCardComponent } from '../process-card/process-card.component';

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule, ProcessCardComponent],
  templateUrl: './process-section.component.html',
  styleUrls: ['./process-section.component.scss']
})
export class ProcessSectionComponent {
  steps = [
    {
      id: '001',
      titleKey: 'LANDING.PROCESS.CARD_1_TITLE',
      descKey: 'LANDING.PROCESS.CARD_1_DESC',
      icon: BrainCircuit
    },
    {
      id: '002',
      titleKey: 'LANDING.PROCESS.CARD_2_TITLE',
      descKey: 'LANDING.PROCESS.CARD_2_DESC',
      icon: Hammer
    },
    {
      id: '003',
      titleKey: 'LANDING.PROCESS.CARD_3_TITLE',
      descKey: 'LANDING.PROCESS.CARD_3_DESC',
      icon: ShieldCheck
    },
    {
      id: '004',
      titleKey: 'LANDING.PROCESS.CARD_4_TITLE',
      descKey: 'LANDING.PROCESS.CARD_4_DESC',
      icon: BarChart3
    }
  ];
}