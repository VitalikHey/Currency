import { Component, EventEmitter, Output } from '@angular/core';
import { Currency, nameCryptoArray } from '../../../data-type';

@Component({
  selector: 'app-button-toggle-crypto',
  templateUrl: './button-toggle-crypto.component.html',
  styleUrls: ['./button-toggle-crypto.component.scss'],
})
export class ButtonToggleCryptoComponent {
  @Output() public selectedButtonCrypto: EventEmitter<string> =
    new EventEmitter();

  protected arrayButtonCrypto: Array<Currency> = nameCryptoArray;

  protected processingValueCryptoCode = (value: string): void => {
    this.selectedButtonCrypto.emit(value);
  };
}
