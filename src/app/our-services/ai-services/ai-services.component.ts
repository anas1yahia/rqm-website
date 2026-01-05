import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'app-ai-services',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule],
  templateUrl: './ai-services.component.html',
  styleUrls: ['./ai-services.component.scss']
})
export class AiServicesComponent {
  readonly ChevronDown = ChevronDown;
  activeIndex: number | null = 0; // Default first one open

  servicesList = [
    'DISCOVERY',
    'DESIGN',
    'BUILD',
    'DATA',
    'SECURITY',
    'AUTOMATION',
    'PRODUCT'
  ];

  setActive(index: number) {
    // For Desktop: Always select. For Mobile: Toggle.
    // We can handle this in the template by checking the context or just allow toggle.
    // Let's allow toggle for now, but for desktop view we might want to ensure one is always visible or handle null state.
    if (this.activeIndex === index) {
      this.activeIndex = null;
    } else {
      this.activeIndex = index;
    }
  }
  
  // Specific method for desktop to prevent closing if desired
  selectService(index: number) {
    this.activeIndex = index;
  }
}
