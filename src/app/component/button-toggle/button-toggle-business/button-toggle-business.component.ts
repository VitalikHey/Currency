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

  protected addSelectedButton(value: string): void {
    this.selectedButtonCurrency.emit(value);
  }
  protected processingValueCurrencyCode(
    value: string,
    eventEmitter: EventEmitter<string>,
  ): void {
    eventEmitter.emit(value);
  }
}
