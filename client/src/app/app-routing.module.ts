import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Error404Component } from './notfound/error404/error404.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './web/about/about.component';
import { ContactsComponent } from './web/contacts/contacts.component';
import { HomeComponent } from './web/home/home.component';


const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch:'full'},
{path: 'login', component:LoginComponent},
{path: 'register', component:RegisterComponent},
{path: 'error404', component:Error404Component},
{path: '**', redirectTo: 'error404'},
{path: 'category', component:CategoryComponent},
{path: 'dashboard', component:DashboardComponent},
{path: 'products', component:ProductsComponent},
{path: 'about', component:AboutComponent},
{path: 'contacts', component:ContactsComponent},
{path: 'home', component:HomeComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
