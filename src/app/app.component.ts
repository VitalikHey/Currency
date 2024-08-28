import {
  ChangeDetectionStrategy,
  Component,
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
} from './component/data-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChild('bankTemplate') bankTemplate: TemplateRef<string> | null;
  @ViewChild('cryptoTemplate') cryptoTemplate: TemplateRef<string> | null;

  constructor() {
    this.bankTemplate = null;
    this.cryptoTemplate = null;
  }

  protected codeValueGive: string = '';
  protected nameIconGive: string = '';
  protected codeValueGet: string = '';
  protected nameIconGet: string = '';
  protected arrayNameCrypto: Array<string> = nameCryptoArray;
  protected readonly nameButtonRusBankListRussian: Array<string> =
    nameButtonRusBankListRussian;
  protected readonly nameButtonCryptoList: Array<Currency> =
    nameButtonCryptoList;
  protected readonly nameButtonRusBankList: Array<string> =
    nameButtonRusBankList;
  protected readonly nameButtonCurrency: Array<Currency> = nameButtonCurrency;

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
}
