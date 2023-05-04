import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactsComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WebModule { }
