import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessCardComponent } from '../process-card/process-card.component';
import { ValuesCardComponent } from '../values-card/values-card.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface CardData {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgImage: string;
}

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [CommonModule, ProcessCardComponent, ValuesCardComponent, TranslateModule],
  templateUrl: './process-section.component.html',
  styleUrls: ['./process-section.component.scss'],
})
export class ProcessSectionComponent implements OnInit {
  imgBg = "process/bg.png";

  // Icons for cards
  iconSustainability = "process/sustainability.svg";
  iconAnalysis = "process/analysis.svg";
  iconPerfection = "process/perfection.svg";
  iconCommitment = "process/commitment.svg";

  // Data
  cards: CardData[] = [
    {
      id: 'sustainability',
      title: 'LANDING.VALUES.SUSTAINABILITY_CARD_TITLE',
      description: 'LANDING.VALUES.SUSTAINABILITY_CARD_DESC',
      icon: this.iconSustainability,
      bgImage: "value card/01.png"
    },
    {
      id: 'analysis',
      title: 'LANDING.VALUES.ANALYSIS_CARD_TITLE',
      description: 'LANDING.VALUES.ANALYSIS_CARD_DESC',
      icon: this.iconAnalysis,
      bgImage: "value card/02.png"
    },
    {
      id: 'perfection',
      title: 'LANDING.VALUES.PERFECTION_CARD_TITLE',
      description: 'LANDING.VALUES.PERFECTION_CARD_DESC',
      icon: this.iconPerfection,
      bgImage: "value card/03.png"
    },
    {
      id: 'commitment',
      title: 'LANDING.VALUES.COMMITMENT_CARD_TITLE',
      description: 'LANDING.VALUES.COMMITMENT_CARD_DESC',
      icon: this.iconCommitment,
      bgImage: "value card/04.png"
    }
  ];

  // Logic for rotation
  activeIndex = 0;
  intervalId: any;

  constructor(private cdr: ChangeDetectorRef, private translate: TranslateService) {}

  ngOnInit() {
    this.startRotation();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startRotation() {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.cards.length;
      this.cdr.markForCheck(); // Ensure change detection runs
    }, 3000); 
  }

  trackById(index: number, item: CardData): string {
    return item.id;
  }
}
