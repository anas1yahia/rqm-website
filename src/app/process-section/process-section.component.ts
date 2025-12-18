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
export class ProcessSectionComponent implements OnInit, OnDestroy {
  // Assets
  imgBg = "https://www.figma.com/api/mcp/asset/29004465-5217-4f60-b76c-20d8a3d02008"; 
  
  // Icons
  iconSustainability = "https://www.figma.com/api/mcp/asset/f41f44b4-ef6c-40aa-8739-9ee4b89f0e0f";
  iconAnalysis = "https://www.figma.com/api/mcp/asset/ae8a9e0f-25d0-4b0e-a211-fbd6cfb4b030"; 
  iconPerfection = "https://www.figma.com/api/mcp/asset/8b091450-ffde-4c1b-8f37-435981e1ed95";
  iconCommitment = "https://www.figma.com/api/mcp/asset/735622ee-1c7a-4226-b8e6-df6282552ca6";

  // Data
  cards: CardData[] = [
    {
      id: 'sustainability',
      title: 'PROCESS.CARD_SUSTAINABILITY_TITLE',
      description: 'PROCESS.CARD_SUSTAINABILITY_DESC',
      icon: this.iconSustainability,
      bgImage: "/value card/01.png"
    },
    {
      id: 'analysis',
      title: 'PROCESS.CARD_ANALYSIS_TITLE',
      description: 'PROCESS.CARD_ANALYSIS_DESC',
      icon: this.iconAnalysis,
      bgImage: "/value card/02.png"
    },
    {
      id: 'perfection',
      title: 'PROCESS.CARD_PERFECTION_TITLE',
      description: 'PROCESS.CARD_PERFECTION_DESC',
      icon: this.iconPerfection,
      bgImage: "/value card/03.png"
    },
    {
      id: 'commitment',
      title: 'PROCESS.CARD_COMMITMENT_TITLE',
      description: 'PROCESS.CARD_COMMITMENT_DESC',
      icon: this.iconCommitment,
      bgImage: "/value card/04.png"
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
