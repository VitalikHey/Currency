import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { GetApiCurrencyService } from './component/services/get-api-currency.service';
import { Subject, takeUntil } from 'rxjs';
import { ServiceResponse } from './component/data-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private serviceCurrency: GetApiCurrencyService) {}

  protected responseServer: Record<string, { code: string; value: number }> = {
    key: {
      code: '',
      value: 0,
    },
  };

  public ngOnInit(): void {
    this.serviceCurrency
      .getApiCurrency()
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: ServiceResponse): void => {
        this.responseServer = value.data;
      });
  }

  protected codeValueGive: string = 'RUB';
  protected nameIconGive: string = 'alphaBank';
  protected codeValueGet: string = 'USD';
  protected nameIconGet: string = 'discoveryBank';

  private readonly destroy$: Subject<void> = new Subject();

  protected handleValueCodeCurrencyGive(value: string): void {
    this.codeValueGive = value;
  }

  protected handleValueNameIconGive(value: string): void {
    this.nameIconGive = value;
  }

  protected handleValueCodeCurrencyGet(value: string): void {
    this.codeValueGet = value;
  }

  protected handleValueNameIconGet(value: string): void {
    this.nameIconGet = value;
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
