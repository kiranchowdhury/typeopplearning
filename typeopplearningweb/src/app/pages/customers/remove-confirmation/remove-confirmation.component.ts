import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { Customer } from '../customers-state';
import { CustomerlistComponent } from '../customerlist/customerlist.component';

@Component({
  selector: 'tl-remove-confirmation',
  templateUrl: './remove-confirmation.component.html',
  styleUrls: ['./remove-confirmation.component.scss']
})
export class RemoveConfirmationComponent implements OnInit {

  @Input() header;
  @Input() modalMessage;
  @Input() customer;
  @Input() component: CustomerlistComponent;
  constructor( private activeModal: NgbActiveModal,
    private store: Store<AppState>) {}

  ngOnInit() {

  }

  closeModal() {
    this.activeModal.close();
  }

  removeCustomer(){
    this.activeModal.close();
    console.log(this.customer);
    this.component.removeCustomerData(this.customer);

  }

}
