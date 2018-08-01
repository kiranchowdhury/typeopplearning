import { Action } from '@ngrx/store';
import { PasswordResetRequest, PasswordResetResponse } from './reset-password-contract';
import { ErrorResponse } from '../error/error-response';
import { PasswordResetState } from './reset-password-state';
import { AppState } from '../../@models/app-state';

export enum ResetPasswordActionTypes {
  RESET_PASSWORD = 'Reset Password Firsttime',
  RESET_PASSWORD_SUCCESS = 'Reset Password Firsttime Success',
  RESET_PASSWORD_FAILED = 'Reset Password Firsttime Failed'
}

export class ResetPasswordAction implements Action {
  readonly type = ResetPasswordActionTypes.RESET_PASSWORD;
  constructor(public payload: PasswordResetRequest){}
}

export class ResetPasswordActionSuccess implements Action {
  readonly type = ResetPasswordActionTypes.RESET_PASSWORD_SUCCESS;
  constructor(public payload: PasswordResetResponse){}
}
export class ResetPasswordActionFailed implements Action {
  readonly type = ResetPasswordActionTypes.RESET_PASSWORD_FAILED;
  constructor(public payload: ErrorResponse){}
}

export type ResetPasswordActions = ResetPasswordAction |
                                  ResetPasswordActionSuccess |
                                  ResetPasswordActionFailed


export const initialPasswordState: PasswordResetState = {
  loading: false,
  loadingMsg: '',
  error: {},
  authenticated: false
}

export const selectorResetPassword = (state: AppState) => (state && state.passwordReset) || initialPasswordState;


export function passwordResetReducer(
  state: PasswordResetState = initialPasswordState,
  action: ResetPasswordActions
): PasswordResetState {
  switch (action.type) {
    case ResetPasswordActionTypes.RESET_PASSWORD:
    return {
      ...state,
      loading: true,
      loadingMsg: 'Verifying User...',
      authenticated: false
    }
    case ResetPasswordActionTypes.RESET_PASSWORD_SUCCESS:
     return {
      ...state,
      loading: false,
      loadingMsg: '',
      authenticated: action.payload.authenticated
    }
    case ResetPasswordActionTypes.RESET_PASSWORD_FAILED:
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      authenticated: false,
      error: {
        code: action.payload.code,
        httpError: action.payload.httpError,
        message: action.payload.message
      }
    }
    default:
    return {
      ...state
    }
  }
}
