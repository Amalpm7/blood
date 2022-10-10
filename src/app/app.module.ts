import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchdonorComponent } from './searchdonor/searchdonor.component';
import { DeletdonorComponent } from './deletdonor/deletdonor.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDonorComponent,
    NavbarComponent,
    SearchdonorComponent,
    DeletdonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
