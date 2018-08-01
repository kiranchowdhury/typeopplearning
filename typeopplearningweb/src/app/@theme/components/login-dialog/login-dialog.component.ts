import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { ActionSignIn } from '../../../@core/login/login.reducer';

@Component({
  selector: 'tl-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  // loading: boolean;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
      private activeModal: NgbActiveModal,
      private store: Store<AppState>) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  login() {
    console.log("Login Payload", this.form.value);
    this.closeModal();
    this.store.dispatch(new ActionSignIn(this.form.value));
  }

}
