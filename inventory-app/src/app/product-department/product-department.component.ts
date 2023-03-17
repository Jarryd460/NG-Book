import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent {
  @Input() product: Product;

  constructor() {
    this.product = new Product('', '', '', [], 0.0);
  }
}
