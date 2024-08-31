import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SequenceNumber } from '../data-type';

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
  @Input() public nameFirstTemplate: string = '';
  @Input() public nameSecondTemplate: string = '';

  protected isShowIconFirstTemplate: boolean = true;
  protected isShowIconSecondTemplate: boolean = false;
  protected firstOrSecond: string = SequenceNumber.first;

  protected readonly SequenceNumber: typeof SequenceNumber = SequenceNumber;

  protected processingValueCurrencyCode(value: string): void {
    this.codeCurrency.emit(value);
    this.isShowIconFirstTemplate = true;
  }

  protected processingValueCurrencyCodeCrypto(value: string): void {
    console.log(value);
    this.isShowIconSecondTemplate = true;
  }

  protected processingValueNameIconCrypto(value: string): void {
    this.nameIcon.emit(value);
    this.codeCurrency.emit(value);
  }

  protected addCryptoOrCurrency(value: string): void {
    this.firstOrSecond = value;
  }

  public processingValueNameIconBank(value: string): void {
    this.nameIcon.emit(value);
  }

  public checkingIconOutput(): void {
    switch (this.firstOrSecond) {
      case SequenceNumber.first:
        this.isShowIconSecondTemplate = false;
        this.isShowIconFirstTemplate = true;
        break;
      case SequenceNumber.second:
        this.isShowIconFirstTemplate = false;
        break;
    }
  }
}
