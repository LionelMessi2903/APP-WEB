import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BredcrumbsComponent } from './bredcrumbs/bredcrumbs.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    SidebarComponent,
    BredcrumbsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

//ADRIAN MUÑOZ