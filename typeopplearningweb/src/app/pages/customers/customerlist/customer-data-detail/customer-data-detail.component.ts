import { Component, OnInit, Input, ViewChildren, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../@models/app-state';
import { selectorCustomers, GetCustomerDetailAction } from '../../customers.reducer';
import { CustomersState, Customer } from '../../customers-state';

@Component({
  selector: 'tl-customer-data-detail',
  templateUrl: './customer-data-detail.component.html',
  styleUrls: ['./customer-data-detail.component.scss']
})
export class CustomerDataDetailComponent implements OnInit {
  customerDetail: Customer;
  @Input() mode: string;
  @ViewChild('nameedit') nameElement: ElementRef;
  pathHash : string;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.pathHash = window.location.hash;
    this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        this.customerDetail = custState.customerDetail;
        console.log("CUSTOMERS =========", this.customerDetail);
      }
    )
  }

}
