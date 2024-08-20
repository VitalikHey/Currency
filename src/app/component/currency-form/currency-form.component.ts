import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.scss'],
})
export class CurrencyFormComponent {
  protected nameButtonCurrency: Array<string> = [
    'Все',
    'Рубли',
    'Доллары',
    'Фунты',
    'Евро',
  ];
}
