import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonComponent } from '../../global/button/button.component';

@Component({
  selector: 'app-your-solutions',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ButtonComponent],
  templateUrl: './your-solutions.component.html',
  styleUrls: ['./your-solutions.component.scss']
})
export class YourSolutionsComponent {
  imgRectangle1 = "https://www.figma.com/api/mcp/asset/9a161daa-c4dc-472c-85de-ef7687fe6246";
  imgContainer = "https://www.figma.com/api/mcp/asset/052d9305-4c7d-4ba9-8da4-b024d1addb4d";
  imgVector = "https://www.figma.com/api/mcp/asset/318969eb-fb32-4a7b-b145-5db6e353837b";
  imgVector1 = "https://www.figma.com/api/mcp/asset/2b97cddf-b7a5-4a09-8f31-ad9023c21962";
  imgVector2 = "https://www.figma.com/api/mcp/asset/28fb1ee7-e685-4a1c-aa00-835e8db798df";
  imgVector3 = "https://www.figma.com/api/mcp/asset/ce5c9836-fd86-480a-abfa-5b8787a3d098";
  imgVector4 = "https://www.figma.com/api/mcp/asset/c5eff228-82f2-4d99-bcf4-7287dfb9a9a7";
  imgVector5 = "https://www.figma.com/api/mcp/asset/4b439e59-1f39-448a-ae94-4b35a10ebad3";
  imgRectangle = "https://www.figma.com/api/mcp/asset/39bdb7f6-611d-479c-a1be-1100769c2c8a";

  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'ar';
  }

  constructor(private translate: TranslateService) {}
}
