import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { CurrencyFormComponent } from './component/currency-form/currency-form.component';
import { ButtonCurrencyComponent } from './component/button-currency/button-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormComponent,
    ButtonCurrencyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
