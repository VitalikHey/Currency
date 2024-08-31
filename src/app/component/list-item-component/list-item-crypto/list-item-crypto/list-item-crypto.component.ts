import { Component, EventEmitter, Output } from '@angular/core';
import {
  nameButtonCryptoList,
  nameButtonCryptoListCode,
} from '../../../data-type';

@Component({
  selector: 'app-list-item-crypto',
  templateUrl: './list-item-crypto.component.html',
  styleUrls: ['./list-item-crypto.component.scss'],
})
export class ListItemCryptoComponent {
  @Output() nameSelectedCrypto: EventEmitter<string> = new EventEmitter();

  protected readonly nameButtonCryptoList: Array<string> = nameButtonCryptoList;
  protected readonly nameButtonCryptoListCode: Array<string> =
    nameButtonCryptoListCode;

  protected addNameSelectedCrypto = (value: string): void => {
    this.nameSelectedCrypto.emit(value);
  };
}
