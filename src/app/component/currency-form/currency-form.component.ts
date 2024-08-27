import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  Currency,
  Money,
  nameButtonCryptoList,
  nameButtonCurrency,
  nameButtonRusBankList,
  nameButtonRusBankListRussian,
} from '../data-type';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyFormComponent {
  @Output() public codeCurrency: EventEmitter<string> = new EventEmitter();
  @Output() public nameIcon: EventEmitter<string> = new EventEmitter();

  @Input() public valueTitle: string = '';

  protected isShowIconBank: boolean = true;
  protected isShowIconCrypto: boolean = false;
  protected readonly nameButtonCryptoList: Array<Currency> =
    nameButtonCryptoList;
  protected readonly nameButtonRusBankListRussian: Array<string> =
    nameButtonRusBankListRussian;
  protected readonly nameButtonRusBankList: Array<string> =
    nameButtonRusBankList;
  protected readonly nameButtonCurrency: Array<Currency> = nameButtonCurrency;
  protected cryptoOrCurrency: string = Money.currency;

  protected processingValueCurrencyCode(value: string): void {
    this.codeCurrency.emit(value);
    this.isShowIconBank = true;
  }

  protected processingValueNameIconBank(value: string): void {
    this.nameIcon.emit(value);
  }

  protected processingValueNameIconCrypto(name: string, code: string): void {
    this.nameIcon.emit(name);
    this.codeCurrency.emit(code);
  }

  protected addCryptoOrCurrency(value: string): void {
    this.cryptoOrCurrency = value;
  }

  public checkingIconOutput(): void {
    this.nameIcon.emit('');
    this.codeCurrency.emit('');
    switch (this.cryptoOrCurrency) {
      case Money.currency:
        this.isShowIconCrypto = false;
        break;
      case Money.crypto:
        this.isShowIconBank = false;
        break;
    }
  }

  protected readonly Money = Money;
}
