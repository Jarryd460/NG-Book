import { Component, HostBinding, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {
  @Input() product: Product;
  // Allows us to set the values of attributes on parent component
  @HostBinding('attr.class') cssClass = 'item';

  constructor() {
    this.product = new Product('', '', '', [], 0.0);
  }
}
