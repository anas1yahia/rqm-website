import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent {

}
