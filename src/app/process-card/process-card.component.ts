import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-process-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-card.component.html',
  styleUrls: ['./process-card.component.scss'],
  animations: [
    trigger('bgImageAnimation', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ProcessCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() bgImage: string = '';
  @Input() isActive: boolean = false;

  // For the rotating/shifting animation effect, we might need an index or position input
  @Input() position: number = 0;
}
