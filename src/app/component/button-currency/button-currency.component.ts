import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SequenceNumber } from '../data-type';

@Component({
  selector: 'app-button-currency',
  templateUrl: './button-currency.component.html',
  styleUrls: ['./button-currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCurrencyComponent {
  @Output() public outputValue: EventEmitter<string> = new EventEmitter();

  @Input() public nameFirstTemplate: string = '';
  @Input() public nameSecondTemplate: string = '';

  public valueCurrency: string = '';

  protected handleClickButtonCurrency(currency: boolean): void {
    if (currency) {
      this.valueCurrency = SequenceNumber.first;
    } else {
      this.valueCurrency = SequenceNumber.second;
    }
    this.outputValue.emit(this.valueCurrency);
  }
}
