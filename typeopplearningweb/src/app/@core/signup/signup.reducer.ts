import { Action } from '@ngrx/store';
import { SignupRequest, SignupResponse, PasswordRequest } from './signup.contract';
import { ErrorResponse } from '../error/error-response';
import { SignupState } from './signup.state';
import { exec } from 'child_process';
import { AppState } from '../../@models/app-state';

export enum SignupActionsTypes {
  SIGN_UP = 'Sign Up',
  SIGN_UP_SUCCESS = 'Sign up success',
  SIGN_UP_FAILED = 'Sign up failed',
  PASSWORD = 'Reset Password',
  PASSWORD_SUCCESS = 'Reset Password Success',
  PASSWORD_FAILED = 'Reset Password Failed'
}

export class ActionSignup implements Action {
  readonly type =  SignupActionsTypes.SIGN_UP;
  constructor(public payload: SignupRequest){};
}

export class ActionSignupSuccess implements Action {
  readonly type = SignupActionsTypes.SIGN_UP_SUCCESS;
  constructor(public payload: SignupResponse){};
}

export class ActionSignupFailed implements Action {
  readonly type = SignupActionsTypes.SIGN_UP_FAILED;
  constructor(public payload: ErrorResponse){};
}

export class ActionPassword implements Action {
  readonly type =  SignupActionsTypes.PASSWORD;
  constructor(public payload: PasswordRequest){};
}

export class ActionPasswordSuccess implements Action {
  readonly type = SignupActionsTypes.PASSWORD_SUCCESS;
  constructor(public payload: SignupResponse){};
}

export class ActionPasswordFailed implements Action {
  readonly type = SignupActionsTypes.PASSWORD_FAILED;
  constructor(public payload: ErrorResponse){};
}


export type SignupActions = ActionSignup | ActionSignupSuccess | ActionSignupFailed
                            | ActionPassword | ActionPasswordSuccess
                            | ActionPasswordFailed

export const initialSignupState: SignupState = {
  email: '',
  resetPasswordView: false
}

export const selectorSignup = (state: AppState) => state.signup || initialSignupState;

export function signupReducer (
  state: SignupState = initialSignupState,
  action: SignupActions
): SignupState {
  switch (action.type) {
    case SignupActionsTypes.SIGN_UP :
    return {
      ...state,
      loading: true,
      loadingMsg: 'Signing up',
      error: null,
      activated: false
    }
    case SignupActionsTypes.SIGN_UP_SUCCESS :
    return {
      ...state,
      loading: false,
      loadingMsg: action.payload.message,
      resetPasswordView: true,
      email: action.payload.email
      // key: action.payload.key
    }
    case SignupActionsTypes.SIGN_UP_FAILED :
    return {
      ...state,
      error: action.payload,
      loading: false,
      loadingMsg: '',
      // resetPasswordView: false
    }
    case SignupActionsTypes.PASSWORD :
    return {
      ...state,
      loading: true,
      loadingMsg: ' password sending up'
    }
    case SignupActionsTypes.PASSWORD_SUCCESS :
    return {
      ...state,
      loading: false,
      loadingMsg: action.payload.message,
      activated: true
    }
    case SignupActionsTypes.PASSWORD_FAILED :
    return {
      ...state,
      error: action.payload,
      loading: false,
      loadingMsg: ''
    }
    default:
    return state;
  }
}
