import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('menuState', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.4s ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ]),
    trigger('navItems', [
      transition(':enter', [
        query('a', [
          style({ transform: 'translateY(50px) scale(0.9)', opacity: 0 }),
          stagger('150ms', [
            animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HeaderComponent {
  logoImage = "https://www.figma.com/api/mcp/asset/b81f1129-1ac8-4da8-b8e2-e5421ea91484";
  backgroundBorder = "https://www.figma.com/api/mcp/asset/15c023cd-5554-4a58-b669-8a4f515af04e";
  
  isMenuOpen = false;
  readonly MenuIcon = Menu;
  readonly XIcon = X;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
