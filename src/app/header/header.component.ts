import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logoImage = "https://www.figma.com/api/mcp/asset/b81f1129-1ac8-4da8-b8e2-e5421ea91484";
  backgroundBorder = "https://www.figma.com/api/mcp/asset/15c023cd-5554-4a58-b669-8a4f515af04e";
}
