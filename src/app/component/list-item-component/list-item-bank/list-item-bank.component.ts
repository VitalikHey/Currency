import { Component, EventEmitter, Output } from '@angular/core';
import {
  nameButtonRusBankList,
  nameButtonRusBankListRussian,
} from '../../data-type';

@Component({
  selector: 'app-list-item-bank',
  templateUrl: './list-item-bank.component.html',
  styleUrls: ['./list-item-bank.component.scss'],
})
export class ListItemBankComponent {
  @Output() nameSelectedBank: EventEmitter<string> = new EventEmitter();

  protected readonly nameButtonRusBankListRussian: Array<string> =
    nameButtonRusBankListRussian;
  protected readonly nameButtonBankListArray: Array<string> =
    nameButtonRusBankList;

  protected addNameSelectedBank = (value: string): void => {
    this.nameSelectedBank.emit(value);
  };
}
