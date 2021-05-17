import { Component, OnInit, ViewChild } from '@angular/core';
// import { ProductListComponent } from './product-list/product-list.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('taskList', { static: true })
  taskList: ToDoListComponent;

  ngOnInit(): void {
    this.taskList.tasks = [
      {
        id: 1,
        name: 'Akawit',
        description: 'Nasoke',
      },
      {
        id: 2,
        name: 'Kim',
        description: 'Zun',
      },
      {
        id: 3,
        name: 'Nam',
        description: 'Fha',
      },
    ];
  }

  // @ViewChild('productList', { static: true })
  // // @ViewChild('productList') // Recep#2 ตามใน Slide ตารางไม่โชว์
  // productList: ProductListComponent;

  // ngOnInit(): void {
  //   this.productList.products = [
  //     {
  //       name: 'Ipad',
  //       price: 15000,
  //     },
  //     {
  //       name: 'Iphone 12 Max',
  //       price: 50000,
  //     },
  //     {
  //       name: ' Mac',
  //       price: 60000,
  //     },
  //   ];
  // }
  constructor() {}
  // homeTitleValue = `Set home' s title from typescript` Recep#2
}
