import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customers-state';


@Component({
  selector: 'tl-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent implements OnInit {
  @Input() customer: Customer;
  @Input() mode: string;
  constructor() { }
  ngOnInit() {
  }

}
