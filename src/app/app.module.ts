import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UserService} from "./_services/user.service";
import {AccountComponent} from "./account/account.component";
import {LandingComponent} from "./landing/landing.component";
import {AppRoutingModule} from "./app-routing.module";
import {WindowRef} from "./_services/window.service";
import {SharedModule} from "./_shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
