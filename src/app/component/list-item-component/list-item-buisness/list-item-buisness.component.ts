import { Component, EventEmitter, Output } from '@angular/core';
import {
  nameButtonRusBankList,
  nameButtonRusBankListRussian,
} from '../../data-type';

@Component({
  selector: 'app-list-item-buisness',
  templateUrl: './list-item-buisness.component.html',
  styleUrls: ['./list-item-buisness.component.scss'],
})
export class ListItemBuisnessComponent {
  @Output() nameSelectedBank: EventEmitter<string> = new EventEmitter();

  protected readonly nameButtonRusBankListRussian: Array<string> =
    nameButtonRusBankListRussian;
  protected readonly nameButtonBankListArray: Array<string> =
    nameButtonRusBankList;

  protected addNameSelectedBank(value: string): void {
    this.nameSelectedBank.emit(value);
  }
}
