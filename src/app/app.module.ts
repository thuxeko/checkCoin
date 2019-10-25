import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import bootstrap from "bootstrap";
import { CheckEthComponent } from './check-eth/check-eth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CheckEthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
