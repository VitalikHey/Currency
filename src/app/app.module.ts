import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CurrencyFormComponent } from './component/currency-form/currency-form.component';
import { ButtonCurrencyComponent } from './component/button-currency/button-currency.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { GetApiCurrencyService } from './component/services/get-api-currency.service';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { ExchangeComponent } from './component/exchange/exchange.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormComponent,
    ButtonCurrencyComponent,
    ExchangeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    NgOptimizedImage,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [GetApiCurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
