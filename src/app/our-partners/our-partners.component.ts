import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.scss']
})
export class OurPartnersComponent {
  // Map downloaded images to properties for easy use in template
  logos = {
    advancedControls: 'partners/p-01.png',
    qyd: 'partners/p-02.png',
    riyadBankIcon: 'partners/p-03.png',
    riyadBankText: 'partners/p-04.png',
    misPay: 'partners/p-05.png',
    qassimUniv: 'partners/p-06.png',
    moyasarIcon: 'partners/p-07.png',
    moyasarText: 'partners/p-08.png',
    elm: 'partners/p-09.png',
    moyasarExtra: 'partners/p-10.png', // Check usage
    googleCloud: 'partners/p-11.png',
    unifonic: 'partners/p-12.png',
    siaj: 'partners/p-13.png', // Cayaj/Siaj
    alibabaCloud: 'partners/p-14.png',
    stc: 'partners/p-15.png',
    hyyakIcon: 'partners/p-16.png',
    hyyakText: 'partners/p-17.png'
  };
}
