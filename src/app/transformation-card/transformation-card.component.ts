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
  @Input() marginClass: string = '';

  isLoading: boolean = true; // Added for skeleton loading

  onImageLoad() {
    this.isLoading = false; // Set to false when the image loads
  }
}

