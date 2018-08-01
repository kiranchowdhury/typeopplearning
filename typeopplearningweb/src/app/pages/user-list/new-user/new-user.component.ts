import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppState } from '../../../@models/app-state';
import { Store } from '@ngrx/store';
import { CreateUserAction } from '../user-list-reducer';

@Component({
  selector: 'tl-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  form :FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  constructor(
    private userAddModal: NgbActiveModal,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  createUser = () => {
    console.log('in creating user');
    console.log(this.form);
    this.store.dispatch(new CreateUserAction(this.form.value));
    this.closeModal();
  }

  closeModal = () => this.userAddModal.close();


}
