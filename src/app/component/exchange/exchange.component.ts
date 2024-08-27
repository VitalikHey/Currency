import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  protected responseServer: Record<string, { code: string; value: number }> = {
    key: {
      code: '',
      value: 0,
    },
  };

  constructor(private serviceCurrency: GetApiCurrencyService) {}

  public ngOnInit(): void {
    // this.serviceCurrency
    //   .getApiCurrency()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((value: ServiceResponse): void => {
    //     this.responseServer = value.data;
    //   });
    // this.formGroupExchange.controls.formGive.valueChanges
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((): void => {
    //     this.changeValueFormGive();
    //   });
  }

  public ngOnChanges(): void {
    this.changeValueFormGive();
  }

  protected changeValueFormGive(): void {
    this.formGroupExchange.controls.formGet.setValue(0);
    if (this.formGroupExchange.controls.formGive.value) {
      const valueGet: number =
        this.formGroupExchange.controls.formGive.value *
        (this.responseServer[this.getCurrencyCode].value /
          this.responseServer[this.giveCurrencyCode].value);
      this.formGroupExchange.controls.formGet.setValue(
        Number(valueGet.toFixed(2)),
      );
    }
  }

  protected replaceValueInFormControls(): void {
    const valueGiveIcon: string = this.giveIconName;
    const valueGiveCode: string = this.giveCurrencyCode;

    this.giveIconName = this.getIconName;
    this.giveCurrencyCode = this.getCurrencyCode;
    this.getIconName = valueGiveIcon;
    this.getCurrencyCode = valueGiveCode;
    this.changeValueFormGive();
  }

  protected readonly formGroupExchange: FormGroup<FormGroupExchange> =
    new FormGroup<FormGroupExchange>({
      formGive: new FormControl(0),
      formGet: new FormControl(0, Validators.pattern('^[0-9]*.?[0-9]{0,2}$')),
    });

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
