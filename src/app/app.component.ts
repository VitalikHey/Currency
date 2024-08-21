import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected codeValueGive: string = '';
  protected nameIconGive: string = '';
  protected codeValueGet: string = '';
  protected nameIconGet: string = '';

  protected handleValueCodeCurrencyGive(value: string): void {
    this.codeValueGive = value;
  }

  protected handleValueNameIconGive(value: string): void {
    this.nameIconGive = value;
  }

  protected handleValueCodeCurrencyGet(value: string): void {
    this.codeValueGet = value;
  }

  protected handleValueNameIconGet(value: string): void {
    this.nameIconGet = value;
  }
}
