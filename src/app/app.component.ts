import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  Currency,
  nameButtonCryptoList,
  nameButtonCurrency,
  nameButtonRusBankList,
  nameButtonRusBankListRussian,
  nameCryptoArray,
  SequenceNumber,
  ServiceResponse,
} from './component/data-type';
import { GetApiCurrencyService } from './component/services/get-api-currency.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('bankTemplate') bankTemplate: TemplateRef<string> | null;
  @ViewChild('cryptoTemplate') cryptoTemplate: TemplateRef<string> | null;
  @ViewChild('fullTemplate') fullTemplate: TemplateRef<string> | null;

  constructor(private serviceCurrency: GetApiCurrencyService) {
    this.bankTemplate = null;
    this.cryptoTemplate = null;
    this.fullTemplate = null;
  }

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

  public processingValueNameIconBank(
    value: string,
    output: EventEmitter<string>,
  ): void {
    output.emit(value);
    console.log(value);
  }

  protected codeValueGive: string = 'RUB';
  protected nameIconGive: string = 'alphaBank';
  protected codeValueGet: string = 'USD';
  protected nameIconGet: string = 'discoveryBank';
  protected readonly arrayNameCrypto: Array<string> = nameCryptoArray;
  protected readonly nameButtonRusBankListRussian: Array<string> =
    nameButtonRusBankListRussian;
  protected readonly nameButtonCryptoList: Array<Currency> =
    nameButtonCryptoList;
  protected readonly nameButtonRusBankList: Array<string> =
    nameButtonRusBankList;
  protected readonly nameButtonCurrency: Array<Currency> = nameButtonCurrency;

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

  protected readonly SequenceNumber = SequenceNumber;
  protected readonly console = console;
}
