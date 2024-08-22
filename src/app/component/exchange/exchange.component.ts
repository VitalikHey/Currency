import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormGroupExchange, ServiceResponse } from '../data-type';
import { GetApiCurrencyService } from '../services/get-api-currency.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeComponent implements OnInit, OnDestroy, OnChanges {
  @Input() public giveIconName: string = '';
  @Input() public giveCurrencyCode: string = '';
  @Input() public getIconName: string = '';
  @Input() public getCurrencyCode: string = '';

  private destroy$: Subject<void> = new Subject();
  private responseServer: Record<string, { code: string; value: number }> = {
    key: {
      code: '',
      value: 0,
    },
  };

  protected sumGetCurrency: number = 0;
  constructor(private serviceCurrency: GetApiCurrencyService) {}

  public ngOnInit(): void {
    this.serviceCurrency
      .getApiCurrency()
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: ServiceResponse): void => {
        this.responseServer = value.data;
      });

    this.formGroupExchange.controls.formGive.valueChanges.subscribe(() => {
      this.changeValueFormGive();
    });
  }

  public ngOnChanges(): void {
    this.changeValueFormGive();
  }

  protected changeValueFormGive() {
    this.formGroupExchange.controls.formGet.setValue(0);
    if (this.formGroupExchange.controls.formGive.value) {
      this.formGroupExchange.controls.formGet.setValue(
        this.formGroupExchange.controls.formGive.value *
          (this.responseServer[this.getCurrencyCode].value /
            this.responseServer[this.giveCurrencyCode].value),
      );
    }
  }

  protected readonly formGroupExchange: FormGroup<FormGroupExchange> =
    new FormGroup<FormGroupExchange>({
      formGive: new FormControl(0),
      formGet: new FormControl(0),
    });

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
