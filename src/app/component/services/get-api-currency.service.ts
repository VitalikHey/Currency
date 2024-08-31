import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { ServiceResponse } from '../data-type';

@Injectable()
export class GetApiCurrencyService {
  constructor(private http: HttpClient) {}

  public getApiCurrency(): Observable<ServiceResponse> {
    return this.http
      .get<ServiceResponse>(
        'https://api.currencyapi.com/v3/latest?apikey=cur_live_9ckdaoTaq0pYOq91w08BqVRK62yoCGMGBkklZ4SP',
      )
      .pipe(
        catchError((err: unknown) => {
          console.log('Error', err);
          return of();
        }),
      );
  }
}
