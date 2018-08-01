import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppState } from '../../../@models/app-state';
import { Store } from '@ngrx/store';
import { CreateCustomerAction } from '../customers.reducer';

@Component({
  selector: 'tl-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl(''),
    contactName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    noOfUsers: new FormControl(),
    remainingBudget: new FormControl(0)
  });
  constructor(
      private activeModal: NgbActiveModal,
      private store: Store<AppState>) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();

  }

  createCustomer() {
   console.log('Hi There', this.form.value);
    this.closeModal();
    this.store.dispatch(new CreateCustomerAction(this.form.value))
  }
}
