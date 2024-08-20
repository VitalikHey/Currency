import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CurrencyFormComponent } from './component/currency-form/currency-form.component';
import { ButtonCurrencyComponent } from './component/button-currency/button-currency.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [AppComponent, CurrencyFormComponent, ButtonCurrencyComponent],
    imports: [BrowserModule, BrowserAnimationsModule, MatButtonToggleModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
