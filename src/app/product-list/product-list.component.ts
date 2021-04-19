import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor() {
    this.products = [];
    this.products.push( {
        name: 'Ipad',
        price: 15000
    });
    this.products.push( {
      name: 'Iphone 12 Max',
      price: 50000
    });
  this.products.push( {
    name: ' Mac',
    price: 60000
    });
  }

  ngOnInit(): void {
  }
  selectedProduct(product: Product) {
    alert(`Product ${product.name} selected`);

  }

}
