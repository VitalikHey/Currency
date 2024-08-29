import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
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
  @Output() public selectedToggleButton: EventEmitter<string> =
    new EventEmitter();

  @Input() public parentFunction: (
    value: string,
    output: EventEmitter<string>,
  ) => void = (): void => {};
  @Input() public templateButton: TemplateRef<string> | null;
  @Input() public arrayButton: Array<Currency> = [];

  constructor() {
    this.templateButton = null;
  }
}
