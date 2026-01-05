import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ButtonComponent } from '../../global/button/button.component';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-our-promise',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonComponent, RouterLink],
  templateUrl: './our-promise.component.html',
  styleUrls: ['./our-promise.component.scss']
})
export class OurPromiseComponent implements OnInit, OnDestroy {
  currentLang: string = 'ar';
  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'ar';
  }

  ngOnInit() {
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
    });
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
