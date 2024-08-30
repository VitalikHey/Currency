import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-list-item-ui',
  templateUrl: './list-item-ui.component.html',
  styleUrls: ['./list-item-ui.component.scss'],
})
export class ListItemUiComponent {
  @Output() public clickItem: EventEmitter<string> = new EventEmitter();

  @Input() public templateString: TemplateRef<string> | null;
  @Input() public arrayNameString: Array<string> = [];

  constructor() {
    this.templateString = null;
  }
}
