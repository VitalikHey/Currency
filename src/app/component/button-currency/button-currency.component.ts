import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

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
      this.valueCurrency = 'currency';
    } else {
      this.valueCurrency = 'crypto';
    }
    this.outputValue.emit(this.valueCurrency);
  }
}
