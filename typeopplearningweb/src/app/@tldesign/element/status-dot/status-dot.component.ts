import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tl-status-dot',
  templateUrl: './status-dot.component.html',
  styleUrls: ['./status-dot.component.scss']
})
export class StatusDotComponent implements OnInit {

  @Input() status: String ;

  constructor() { }

  ngOnInit() {
  }

}
