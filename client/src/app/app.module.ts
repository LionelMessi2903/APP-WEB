import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { NotfoundModule } from './notfound/notfound.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { WebModule } from './web/web.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    WebModule,
    SharedModule,
    NotfoundModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
