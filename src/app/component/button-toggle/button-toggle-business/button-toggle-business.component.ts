import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Currency, nameButtonCurrency } from '../../data-type';

@Component({
  selector: 'app-button-toggle-business',
  templateUrl: './button-toggle-business.component.html',
  styleUrls: ['./button-toggle-business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleBusinessComponent {
  @Output() public selectedButtonCurrency: EventEmitter<string> =
    new EventEmitter();

  protected arrayButtonCurrency: Array<Currency> = nameButtonCurrency;

  protected processingValueCurrencyCode = (value: string): void => {
    this.selectedButtonCurrency.emit(value);
  };
}
