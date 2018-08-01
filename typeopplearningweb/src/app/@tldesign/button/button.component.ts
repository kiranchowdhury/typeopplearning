import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() className: string;
  @Input() type: string;
  @Input() icon: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  handleClick(event: any) {
    this.onClick.emit(event);
  }
}
