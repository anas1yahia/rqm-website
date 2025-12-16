import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowUpLeft } from 'lucide-angular';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() bgImage: string = '';
  @Input() footerText: string = '';
  
  readonly ArrowUpLeft = ArrowUpLeft;
}
