import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Money } from '../data-type';

@Component({
  selector: 'app-button-currency',
  templateUrl: './button-currency.component.html',
  styleUrls: ['./button-currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCurrencyComponent {
  @Output() public outputValue: EventEmitter<string> = new EventEmitter();
  public valueCurrency: string = '';

  protected handleClickButtonCurrency(currency: boolean): void {
    if (currency) {
      this.valueCurrency = Money.currency;
    } else {
      this.valueCurrency = Money.crypto;
    }
    this.outputValue.emit(this.valueCurrency);
  }
}
