import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { SignupService } from './signup.service'
import { CustomHeaderService } from '../api-handlers/custom-header.service';
import { Observable } from "rxjs/internal/Observable";
import { SignupActionsTypes, SignupActions, ActionSignup, ActionSignupSuccess, ActionSignupFailed, ActionPasswordSuccess, ActionPasswordFailed, ActionPassword } from "./signup.reducer";
// import { switchMap } from "rxjs/operators";
import { SignupResponse } from "./signup.contract";
import { switchMap, map, tap } from "rxjs/operators";

@Injectable()
export class SignupEffects {
  constructor (
    private $action: Actions<Action>,
    private signupService: SignupService,
    private customHeaderService: CustomHeaderService
  ) {}

  @Effect()
  signup(): Observable<Action> {
    return this.$action.ofType(SignupActionsTypes.SIGN_UP)
            .pipe(
              switchMap ((action: ActionSignup) =>
             this.signupService.signup(action.payload)
            .pipe (
              map( (resp: SignupResponse) =>
            (resp.status === 1) ? new ActionSignupSuccess(resp)
             : new ActionSignupFailed({code: resp.code, message: resp.message}) )
            ) )
            )
  }

  @Effect()
  password(): Observable<Action> {
    return this.$action.ofType(SignupActionsTypes.PASSWORD)
            .pipe(
              switchMap ((action: ActionPassword) =>
             this.signupService.passwordVerify(action.payload)
            .pipe (
              map( (resp: SignupResponse) =>
            (resp.status === 1) ? new ActionPasswordSuccess(resp)
             : new ActionPasswordFailed({code: resp.code, message: resp.message}) )
            ) )
            )
  }
}
