import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { ActionSignIn } from '../../../@core/login/login.reducer';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordAction, selectorResetPassword } from '../../../@core/reset-password/reset-password.reducer';
import { PasswordResetState } from '../../../@core/reset-password/reset-password-state';
import { Router } from '@angular/router';
// import { PasswordResetService } from '../../../@core/reset-password/reset-password-service';

@Component({
  selector: 'tl-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
// loading: boolean;
email: string;
token: string;
loading: boolean = false;
loadingMsg: string = '';
isError: boolean = false;
code: string = '';


form: FormGroup = new FormGroup({
  confirmPassword: new FormControl(''),
  password: new FormControl(''),
});
constructor(
    // private activeModal: NgbActiveModal,
    private activatedRouted: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
    // private passwordService: PasswordResetService
  ) { }

ngOnInit() {
  // this.email = this.activatedRouted.snapshot.params['email'] ;
  // this.token = this.activatedRouted.snapshot.params['token'] ;
  // this.email = this.activatedRouted.snapshot._urlSegment.segments[2]+'';
  // this.token = this.activatedRouted.snapshot._urlSegment.segments[3]+'';

  console.log('====activatedRoute=====', this.activatedRouted);
  console.log('=========email====='+this.email+'==========token========='+this.token);

  this.store.select(selectorResetPassword).subscribe(
    (passwordState: PasswordResetState) => {
        this.loading = passwordState.loading;
        this.loadingMsg = passwordState.loadingMsg;
        if ( passwordState.error.code ){
          this.code = passwordState.error.code + ' ' + passwordState.error.message;
          this.isError = true;
        }
        else{
          this.isError = false;
        }
        if(passwordState.authenticated){
          this.router.navigate(['/pages/welcome']);
        }
    }
  )
}


resetPassword() {
  this.form.value.email = this.email;
  this.form.value.token = this.token;
  // this.passwordService.reset(this.form.value);
  console.log("reset password Payload", this.form.value);
  this.store.dispatch(new ResetPasswordAction(this.form.value));
}

}
