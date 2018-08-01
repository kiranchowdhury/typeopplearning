import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { ActionSignIn } from '../../../@core/login/login.reducer';
import { ActionSignup, ActionPassword, selectorSignup } from '../../../@core/signup/signup.reducer';
import { SignupState } from '../../../@core/signup/signup.state';

@Component({
  selector: 'tl-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    specialcredit: new FormControl(''),
  });

  passwordForm: FormGroup = new FormGroup({
    password: new FormControl(''),
    newPassword: new FormControl(''),
    cnfPassword: new FormControl('')
  });

  loading = false;
  loadingMessage = '';
  error = null;
  email = '';

  dialogHeading: string = 'Send Password';
  resetPassword: Boolean = false;
  constructor(
      private activeModal: NgbActiveModal,
      private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(selectorSignup).subscribe(
      (signupState: SignupState) => {
        this.loading = signupState.loading;
        this.loadingMessage = signupState.loadingMsg;
        console.log('signupstate', signupState);
        this.error = signupState.error;
        this.email = signupState.email;
        this.resetPassword = signupState.resetPasswordView;
        if(signupState.activated === true){
          // this.closeModal();
        }
      }
    )
  }

  closeModal() {
    this.activeModal.close();
  }

  signup() {
    // console.log("signup Payload component", this.form.value);
    // this.closeModal();
    // this.dialogHeading = 'Login';
    // this.resetPassword = true;
    this.store.dispatch(new ActionSignup(this.form.value));
  }

  resendPassword() {
    console.log('resendPassword');
  }

  verifyPassword() {
    // console.log('verify password');
    this.passwordForm.value.email = this.email;
    if(this.passwordForm.value.newPassword === this.passwordForm.value.cnfPassword){
      this.store.dispatch(new ActionPassword(this.passwordForm.value));
    }
    else{
      this.error = {
        message: "Confirm Password didn't match!"
      };
    }
  }

}
