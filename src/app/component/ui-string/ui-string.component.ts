import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-ui-string',
  templateUrl: './ui-string.component.html',
  styleUrls: ['./ui-string.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiStringComponent {
  @Output() public nameIcon: EventEmitter<string> = new EventEmitter();

  @Input() public templateString: TemplateRef<string> | null;
  @Input() public arrayNamesForStringTemplate: Array<string> = [];

  @Input() public parentFunction: (
    value: string,
    output: EventEmitter<string>,
  ) => void = (): void => {};

  constructor() {
    this.templateString = null;
  }
}
