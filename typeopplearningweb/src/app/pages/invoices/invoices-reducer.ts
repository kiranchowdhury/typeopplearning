import { InvoiceState } from './invoices-state';
import { InvoiceContract } from './invoices-contract';
import { Action } from "@ngrx/store";
import { ErrorResponse } from "../../@core/error/error-response";
import { AppState } from "../../@models/app-state";

export enum InvoiceActionTypes {
    GET_INVOICE_LIST = 'Get Invoice List',
    GET_INVOICE_LIST_SUCCESS = 'Get Invoice List Success',
    GET_INVOICE_LIST_FAIL = 'Get Invoice List Fail',
}

export class GetInvoiceListAction implements Action {
    readonly type = InvoiceActionTypes.GET_INVOICE_LIST;
    constructor() {}
}

export class GetInvoiceListSuccessAction implements Action {
    readonly type = InvoiceActionTypes.GET_INVOICE_LIST_SUCCESS;
    constructor(public payload: InvoiceContract) {}
}

export class GetInvoiceListFailAction implements Action {
    readonly type = InvoiceActionTypes.GET_INVOICE_LIST_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export type InvoiceListActions = GetInvoiceListAction | GetInvoiceListSuccessAction | GetInvoiceListFailAction

export const initialInvoiceState: InvoiceState = {
    loading: false,
    loadingMsg: '',
    invoiceList: [],
    count: 0,
    currentPage: 1,

}

export const selectorInvoice = (state: AppState) => state.invoices.invoiceState || initialInvoiceState;

export function invoiceListReducer(
    state: InvoiceState = initialInvoiceState,
    action: InvoiceListActions
): InvoiceState {
    switch (action.type) {
        case InvoiceActionTypes.GET_INVOICE_LIST:
            return {
                ...state,
                loading: true,
                loadingMsg: 'Retreiving training libraries...'
            }
        case InvoiceActionTypes.GET_INVOICE_LIST_SUCCESS:
        console.log('=================on success=====');
            return {
                ...state,
                invoiceList: action.payload.invoiceList,
                count: action.payload.invoiceList.length,
                loading: false,
                loadingMsg: '',
            }
        case InvoiceActionTypes.GET_INVOICE_LIST_FAIL:
            return {
                ...state,
                errorCode: action.payload.code,
                errorMsg: action.payload.message,
            }
        default:
            return state;
    }
}
