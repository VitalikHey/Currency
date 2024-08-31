import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Currency, nameButtonCurrency } from '../../data-type';

@Component({
  selector: 'app-button-toggle-currency',
  templateUrl: './button-toggle-currency.component.html',
  styleUrls: ['./button-toggle-currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleCurrencyComponent {
  @Output() public selectedButtonCurrency: EventEmitter<string> =
    new EventEmitter();

  protected arrayButtonCurrency: Array<Currency> = nameButtonCurrency;

  protected processingValueCurrencyCode = (value: string): void => {
    this.selectedButtonCurrency.emit(value);
  };
}
