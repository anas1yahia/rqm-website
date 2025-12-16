import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronLeft, ArrowUpLeft, ArrowLeft } from 'lucide-angular';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
  @Input() features: string[] = [];
  @Input() logo: string = '';
  @Input() themeColor: string = '#62c4aa'; // Default to green
  @Input() isSmall: boolean = false; // For the "more solutions" card
  
  readonly ChevronLeft = ChevronLeft;
  readonly ArrowUpLeft = ArrowUpLeft;
  readonly ArrowLeft = ArrowLeft;
}
