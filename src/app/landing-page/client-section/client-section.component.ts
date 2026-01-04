import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-client-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './client-section.component.html',
  styleUrls: ['./client-section.component.scss']
})
export class ClientSectionComponent {
  clients: string[] = [
    'clients/عملاء رقم-01-1.svg',
    'clients/عملاء رقم-02-1.svg',
    'clients/عملاء رقم-03-1.svg',
    'clients/عملاء رقم-04-1.svg',
    'clients/عملاء رقم-05-1.svg'
  ];
}
