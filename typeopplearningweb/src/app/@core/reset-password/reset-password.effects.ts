import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { SessionStorageService } from '../session-storage/session-storage.service';
import { PasswordResetService } from './reset-password-service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { LoginActionTypes, ActionSignIn, ActionSignInSuccess, ActionSignInFail, ActionSignOut, ActionSignOutSuccess } from './login.reducer';
import { switchMap, tap, map } from 'rxjs/operators';
import { PasswordResetResponse, PasswordResetRequest } from './reset-password-contract';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { JwtService } from '../api-handlers/jwt.service';
import { CustomHeaderService } from '../api-handlers/custom-header.service';
import { UserService } from '../context/user.service';
import { ResetPasswordActionTypes, ResetPasswordAction, ResetPasswordActionSuccess, ResetPasswordActionFailed } from './reset-password.reducer';

@Injectable()
export class ResetPasswordEffect {
  constructor(
    private actions$: Actions<Action>,
    private passwordResetService: PasswordResetService,
    private router: Router,
    private jwtService: JwtService,
    private customHeaderService: CustomHeaderService,
  ){}

  @Effect()
  passwordReset(): Observable<Action> {
    return this.actions$.ofType(ResetPasswordActionTypes.RESET_PASSWORD)
    .pipe(
      switchMap((action: ResetPasswordAction) =>
        this.passwordResetService.reset(action.payload).pipe(
          map((response: PasswordResetResponse) =>
            (response.authenticated === true) ? new ResetPasswordActionSuccess(response):
          new ResetPasswordActionFailed({code: 'EFPR0001', message: 'User not found'}))
        ))
    )
  }


}
