import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformationCardComponent } from '../transformation-card/transformation-card.component';
import { LucideAngularModule, ArrowUp } from 'lucide-angular';

@Component({
  selector: 'app-transformation-project',
  standalone: true,
  imports: [CommonModule, TransformationCardComponent, LucideAngularModule],
  templateUrl: './transformation-project.component.html',
  styleUrls: ['./transformation-project.component.scss']
})
export class TransformationProjectComponent {
  readonly ArrowUp = ArrowUp;
}
