import { Component, OnInit, Input, ViewChildren, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../@models/app-state';
import { selectorCustomers, GetCustomerUserListAction } from '../../../customers.reducer';
import { CustomersState, CustomerUserList} from '../../../customers-state';


@Component({
  selector: 'tl-customer-user-list',
  templateUrl: './customer-user-list.component.html',
  styleUrls: ['./customer-user-list.component.scss']
})
export class CustomerUserListComponent implements OnInit {
  userList : CustomerUserList[];
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        this.userList = custState.customerUserList;
        console.log("CUSTOMERS userlist =========", this.userList);
      }
    )
  }

}
