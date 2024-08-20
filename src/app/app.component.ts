import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected codeValueFirst: string = '';
  protected nameIconFirst: string = '';
  protected codeValueSecond: string = '';
  protected nameIconSecond: string = '';

  protected handleValueCodeCurrencyFirst(value: string): void {
    this.codeValueFirst = value;
  }

  protected handleValueNameIconFirst(value: string): void {
    this.nameIconFirst = value;
  }

  protected handleValueCodeCurrencySecond(value: string): void {
    this.codeValueSecond = value;
  }

  protected handleValueNameIconSecond(value: string): void {
    this.nameIconSecond = value;
  }
}
