import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    CategoryComponent,
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
