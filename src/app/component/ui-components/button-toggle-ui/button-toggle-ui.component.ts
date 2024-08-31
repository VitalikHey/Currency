import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { Currency } from '../../data-type';

@Component({
  selector: 'app-button-toggle-ui',
  templateUrl: './button-toggle-ui.component.html',
  styleUrls: ['./button-toggle-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleUiComponent {
  @Input() public templateButton: TemplateRef<string> | null;
  @Input() public arrayButton: Array<Currency> = [];

  constructor() {
    this.templateButton = null;
  }
}
