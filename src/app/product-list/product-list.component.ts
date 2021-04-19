import {Component,OnInit, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { Product } from './product';
import { ProductItemComponent } from './product-item/product-item.component';
@Component({
      selector: 'app-product-list',
      templateUrl: './product-list.component.html',
      styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
      @ViewChildren(ProductItemComponent)
      productItems: QueryList<ProductItemComponent>;

products: Product[];
      constructor() {
      this.products = [];
}
ngOnInit() {}
      selectedProduct(productComponent: ProductItemComponent) {
      alert(`Product ${productComponent.product.name} selected`);
      this.productItems.forEach(p => {
        p.isSelected = false;
      });
      productComponent.isSelected = true;
}
}



// import { Component, OnInit, ViewChild , ViewChildren ,  QueryList } from '@angular/core';
// import { Product } from './product';
// import { ProductItemComponent } from './product-item/product-item.component';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   @ViewChildren(ProductItemComponent)
//   productItems: QueryList<ProductItemComponent>;

//   products: Product[];
//   constructor() {
//     this.products = [];
//   }

//   //   this.products = [];
//   //   this.products.push( {
//   //       name: 'Ipad',
//   //       price: 15000
//   //   });
//   //   this.products.push( {
//   //     name: 'Iphone 12 Max',
//   //     price: 50000
//   //   });
//   // this.products.push( {
//   //   name: ' Mac',
//   //   price: 60000
//   //   });
//   //Recep#2
//   //Lab 4 - ทดสอบ Reipe#3 ViewChild
  

  
//   ngOnInit(): void {  }

//   selectedProduct(productComponent:ProductItemComponent){
//     alert(`Product ${productComponent.product.name} Selected`);
//     this.productItems.forEach (p => {
//       p.isSelected = false ;
//       //console.log(element.isSelected());
      
//     });
//       productComponent.isSelected = true ;
      
//       //console.log(element.isSelected());
//   }
  
  
  // selectedProduct(productComponent:ProductItemComponent){
  //   alert(`Product ${productComponent.product.name} Selected`);
  //   this.productItems.forEach (p => {
  //     p.isSelected = false;
      
  //   });
  //   productComponent.isSelected = true ;
  // }
  // selectedProduct(product: Product) {
  //   alert(`Product ${product.name} selected`);

  // } 
  //ViewChild

// }
