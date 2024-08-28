import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { Currency, Money, SequenceNumber } from '../data-type';

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
  @Input() public firstTemplate: TemplateRef<string> | null;
  @Input() public secondTemplate: TemplateRef<string> | null;
  @Input() public arrayNamesForFirstTemplate: Array<string> = [];
  @Input() public arrayNamesForSecondTemplate: Array<Currency> = [];
  @Input() public nameFirstTemplate: string = '';
  @Input() public nameSecondTemplate: string = '';
  @Input() public nameFilterOption: Array<Currency> = [];
  @Input() public nameSecondOption: Array<string> = [];

  constructor() {
    this.firstTemplate = null;
    this.secondTemplate = null;
  }

  protected isShowIconFirstTemplate: boolean = true;
  protected isShowIconSecondTemplate: boolean = false;
  protected readonly SequenceNumber = SequenceNumber;
  protected firstOrSecond: string = SequenceNumber.first;

  protected processingValueCurrencyCode(value: string): void {
    this.codeCurrency.emit(value);
    this.isShowIconFirstTemplate = true;
  }

  protected processingValueNameIconCrypto(name: string, code: string): void {
    this.nameIcon.emit(name);
    this.codeCurrency.emit(code);
  }

  protected addCryptoOrCurrency(value: string): void {
    this.firstOrSecond = value;
  }

  public processingValueNameIconBank(value: string): void {
    this.nameIcon.emit(value);
  }

  public checkingIconOutput(): void {
    this.nameIcon.emit('');
    this.codeCurrency.emit('');
    switch (this.firstOrSecond) {
      case Money.currency:
        this.isShowIconSecondTemplate = false;
        break;
      case Money.crypto:
        this.isShowIconFirstTemplate = false;
        break;
    }
  }
}
