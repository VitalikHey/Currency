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
import {
  catchError,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';

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
  private valueCodeSubject$: Subject<Array<string>> = new Subject();

  protected arrayCurrencyCode: Array<string> = [];
  protected giveCurrencyCodeValue: number = 0;
  protected getCurrencyCodeValue: number = 0;

  constructor(private serviceCurrency: GetApiCurrencyService) {}

  public ngOnInit(): void {
    this.arrayCurrencyCode = [this.giveCurrencyCode, this.getCurrencyCode];

    this.valueCodeSubject$
      .pipe(
        switchMap((): Observable<ServiceResponse> => {
          return this.serviceCurrency.getApiCurrency().pipe(
            takeUntil(this.destroy$),
            catchError((error) => {
              console.error('Error fetching currency data:', error);
              return of();
            }),
          );
        }),
      )
      .subscribe((value: ServiceResponse): void => {
        if (value.data && value.data[this.arrayCurrencyCode[0]]) {
          this.giveCurrencyCodeValue =
            value.data[this.arrayCurrencyCode[0]].value;
        }
        if (value.data && value.data[this.arrayCurrencyCode[1]]) {
          this.getCurrencyCodeValue =
            value.data[this.arrayCurrencyCode[1]].value;
        }
      });
  }

  public ngOnChanges(): void {
    this.arrayCurrencyCode = [this.giveCurrencyCode, this.getCurrencyCode];
    this.valueCodeSubject$.next(this.arrayCurrencyCode);
  }

  protected handleClick(): void {
    console.log(this.giveCurrencyCodeValue / this.getCurrencyCodeValue);
  }

  protected readonly formGroupExchange: FormGroup<FormGroupExchange> =
    new FormGroup<FormGroupExchange>({
      formGive: new FormControl(null),
      formGet: new FormControl(null),
    });

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
