import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, Send } from 'lucide-angular';
import { ButtonComponent } from '../../../global/button/button.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule, ButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  readonly Send = Send;
}
