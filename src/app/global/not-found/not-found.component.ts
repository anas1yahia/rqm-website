import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, ChevronLeft } from 'lucide-angular';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, TranslateModule, LucideAngularModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  readonly ChevronLeft = ChevronLeft;
  bgTransform = 'translate(0px, 0px)';

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10px
    const y = (e.clientY / window.innerHeight - 0.5) * 20; // -10 to 10px
    
    this.bgTransform = `translate(${x}px, ${y}px)`;
  }
}
