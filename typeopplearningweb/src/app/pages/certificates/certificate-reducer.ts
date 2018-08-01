import { Action } from "@ngrx/store";
import { CertificateState } from "./certificate-state";
import { AppState } from "../../@models/app-state";
import { Certificate } from "crypto";
import { CertificateContract, GetCertificateResponse } from "./certificate-contracts";
import { ErrorResponse } from "../../@core/error/error-response";


export enum CertificateActionTypes {
  GET_CERTIFICATES_ACTION = 'GET CERTIFICATE LIST',
  GET_CERTIFICATES_SUCCESS = 'GET CERTIFICATES SUCCESS',
  GET_CERTIFICATES_FAIL = 'GET CERTIFICATES FAILES'
}

export class GetCertificatesAction implements Action {
  readonly type = CertificateActionTypes.GET_CERTIFICATES_ACTION;
  constructor () {}
}

export class GetCertificatesSuccessAction implements Action {
  readonly type = CertificateActionTypes.GET_CERTIFICATES_SUCCESS;
  constructor (public payload: CertificateContract) {}
}

export class GetCertificatesFailAction implements Action {
  readonly type = CertificateActionTypes.GET_CERTIFICATES_FAIL;
  constructor (public payload: ErrorResponse) {}
}

export type CertificateActions = GetCertificatesAction | GetCertificatesSuccessAction | GetCertificatesFailAction

export const initialCertificateState: CertificateState = {
  loading: false,
  loadingMsg: '',
  certificateList: [],
  count: 0,
  currentPage: 1,
}

export const selectorCertificates = (state: AppState) => state.certificate.certificateState || initialCertificateState;

export function certificateReducer(
  state: CertificateState = initialCertificateState,
  action: CertificateActions
) :CertificateState {

  switch(action.type){
    case CertificateActionTypes.GET_CERTIFICATES_ACTION :
    return {
      ...state,
      loading: true,
      loadingMsg: 'Retrieving Certificate List'
    }
    case CertificateActionTypes.GET_CERTIFICATES_SUCCESS :
    return {
      ...state,
      code: '200',
      message: '',
      isError: false,
      loading: false,
      loadingMsg: '',
      certificateList: action.payload.certificates
    }
    default:
    return state;
  }


}
