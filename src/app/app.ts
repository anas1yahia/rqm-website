import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterOutletContract } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from './services/ui.service';
import { CommonModule } from '@angular/common';
import { MatrixRainComponent } from './landing-page/ui/matrix-rain/matrix-rain.component';
import { fadeAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatrixRainComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [fadeAnimation]
})
export class App {
  protected readonly title = signal('rqm-website');

  constructor(
    private translate: TranslateService,
    public uiService: UiService
  ) {
    this.translate.setDefaultLang('ar');
    this.translate.use('ar');
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
