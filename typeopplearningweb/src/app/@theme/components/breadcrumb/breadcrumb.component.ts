import { Component, OnInit, Input } from '@angular/core';
import { Breadcrumb } from './breadcrumb';

@Component({
  selector: 'tl-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbs: Breadcrumb[] = [];
  // breadcrumbs = [{
  //   name: 'Customers',
  //   link: '/pages/customers',
  //   active: false,
  // }, {
  //   name: 'Customer-1',
  //   link: '/pages/howto',
  //   active: true,
  // }]
  constructor() { }

  ngOnInit() {
  }

}
