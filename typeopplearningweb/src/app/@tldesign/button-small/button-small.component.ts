import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'tl-button-small',
  templateUrl: './button-small.component.html',
  styleUrls: ['./button-small.component.scss']
})
export class ButtonSmallComponent implements OnInit {
  @Input() className: string;
  @Input() icon: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  handleClick(event: any) {
    this.onClick.emit(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
