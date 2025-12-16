import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transformation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transformation-card.component.html',
  styleUrls: ['./transformation-card.component.scss']
})
export class TransformationCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() illustration: string = '';
  @Input() marginClass: string = ''; // To handle specific margins/offsets like "items-end", "items-start" etc if needed, or we can handle it via parent container
}
