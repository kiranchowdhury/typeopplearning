import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { selectorCustomers, GetCustomerAction, RemoveCustomerAction, CustomerDetailUpdateAction, CustomerListUpdateAction } from '../customers.reducer';
import { CustomersState, Customer } from '../customers-state';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCustomerComponent } from '../new-customer/new-customer.component';
import { CreateCustomerRequest } from '../customer-contracts';
import { ToastrService } from 'ngx-toastr';
import { CustomerlistComponent} from './../customerlist/customerlist.component';

@Component({
  selector: 'tl-customer-container',
  templateUrl: './customer-container.component.html',
  styleUrls: ['./customer-container.component.scss']
})

export class CustomerContainerComponent implements OnInit {
  loading: boolean = false;
  loadingMsg: string = '';
  isError: boolean = false;
  code: string = '';
  apiMessage: string = '';
  customers: Customer[];
  mode: string  = 'view';
  tostrPayLoad;
  @ViewChild(CustomerlistComponent) customerCompo: CustomerlistComponent;

  constructor(private store: Store<AppState>,
    private modalService: NgbModal,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        console.log('I AM CALLED');
        this.loading = custState.loading;
        this.loadingMsg = custState.loadingMsg;
        this.customers = custState.customers;
        this.apiMessage = custState.message;
        this.code = custState.code;
        this.isError = custState.isError;
        // console.log("CUSTOMERS", this.customers);
        if(this.isError) {
          this.toastr.error(this.code + ":" + this.apiMessage);
        } else if(!this.loading && this.apiMessage && this.apiMessage.length > 0) {
          this.toastr.success(this.apiMessage);
        }
      }
    )

    this.store.dispatch(new GetCustomerAction());
  }

  createTostrPayload() {
    if (this.isError) {
      this.tostrPayLoad = {level: 'E', message: this.code + ':' + this.apiMessage}
    } else {
      this.tostrPayLoad = {level: 'S', message: this.apiMessage}
    }
  }

  resetToastrPayload() {
    this.tostrPayLoad = {};
  }


  toggleMode() {
    this.mode = this.mode === 'view' ? 'edit' : 'view';
  }

  openNewCustomerDialog() {
    const activeModal = this.modalService.open(NewCustomerComponent, {});
  }

  handleRemoveCustomer(customer: CreateCustomerRequest) {
    console.log("Removing customer", customer);
    this.store.dispatch(new RemoveCustomerAction(customer))
  }

  saveUpdatedList (){
    console.log("============into save updated detail==========");
    console.log(this.customerCompo.changedCustomerList);
    this.store.dispatch(new CustomerListUpdateAction(this.customerCompo.changedCustomerList))
    this.mode = "view";
  }

}
