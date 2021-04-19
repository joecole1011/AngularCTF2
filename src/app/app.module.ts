import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TaskItemComponent } from './to-do-list/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductItemComponent,
    PanelComponent,
    ToDoListComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
