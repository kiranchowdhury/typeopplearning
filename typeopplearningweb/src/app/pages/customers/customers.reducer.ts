import { Action } from "@ngrx/store";
import { GetCustomersResponse, CreateCustomerRequest, CreateCustomerResponse,
    GetCustomerDetailReq,  CustomerBudgetReq, CustomerBudgetDetailContract,
    CustomerUsersReq, CustomerUserListContract, DetailUpdateReq, GetCustomerDetailsResponse,
    DetailsUpdateResp, CustomerListUpdateReq, CustomerListUpdateResp} from "./customer-contracts";
import { ErrorResponse } from "../../@core/error/error-response";
import { CustomersState, Customer } from "./customers-state";
import { AppState } from "../../@models/app-state";

export enum CustomersActionTypes {
    GET_CUSTOMERS = 'Get Customers',
    GET_CUSTOMERS_SUCCESS = 'Get Customers Success',
    GET_CUSTOMERS_FAIL = 'Get Customers Fail',
    CREATE_CUSTOMER = 'Create Customer',
    CREATE_CUSTOMER_SUCCESS = 'Create Customer Success',
    CREATE_CUSTOMER_FAIL = 'Create Customer Fail',
    REMOVE_CUSTOMER = 'Remove Customer',
    REMOVE_CUSTOMER_SUCCESS = 'Remove Customer Success',
    REMOVE_CUSTOMER_FAIL = 'Remove Customer Fail',

    GET_CUSTOMER_DETAIL = 'Get Customer Detail',
    GET_CUSTOMER_DETAIL_SUCCESS = 'Get Customer Detail Success',
    GET_CUSTOMER_DETAIL_FAIL = 'Get Customer Detail Fail',

    GET_CUSTOMER_BUDGET_DETAIL = 'Get Customer Budget Detail',
    GET_CUSTOMER_BUDGET_DETAIL_SUCCESS = 'Get Customer Budget Detail Success',
    GET_CUSTOMER_BUDGET_DETAIL_FAIL = 'Get Customer Budget Detail Fail',

    GET_CUSTOMER_USERS = 'Get Customer User List',
    GET_CUSTOMER_USERS_SUCCESS = 'Get Customer User List Success',
    GET_CUSTOMER_USERS_FAIL = 'Get Customer User List Fail',

    CUSTOMER_DETAIL_UPDATE = 'Update Customer Detail',
    CUSTOMER_DETAIL_UPDATE_SUCCESS = 'Update Customer Detail Success',
    CUSTOMER_DETAIL_UPDATE_FAIL = 'Update Customer Detail Fail',

    CUSTOMER_LIST_UPDATE = 'Update Customer List Detail',
    CUSTOMER_LIST_UPDATE_SUCCESS = 'Update Customer List Detail Success',
    CUSTOMER_LIST_UPDATE_FAIL = 'Update Customer List Detail Fail',

}

export class GetCustomerAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMERS;
    constructor() {}
}

export class GetCustomerSuccessAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMERS_SUCCESS;
    constructor(public payload: GetCustomersResponse) {}
}

export class GetCustomerFailAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMERS_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export class CreateCustomerAction implements Action {
    readonly type = CustomersActionTypes.CREATE_CUSTOMER;
    constructor(public payload: CreateCustomerRequest) {}
}

export class CreateCustomerSuccessAction implements Action {
    readonly type = CustomersActionTypes.CREATE_CUSTOMER_SUCCESS;
    constructor(public payload: CreateCustomerResponse) {}
}

export class CreateCustomerFailAction implements Action {
    readonly type = CustomersActionTypes.CREATE_CUSTOMER_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export class RemoveCustomerAction implements Action {
    readonly type = CustomersActionTypes.REMOVE_CUSTOMER;
    constructor(public payload: CreateCustomerRequest) {}
}

export class RemoveCustomerSuccessAction implements Action {
    readonly type = CustomersActionTypes.REMOVE_CUSTOMER_SUCCESS;
    constructor(public payload: CreateCustomerResponse) {}
}

export class RemoveCustomerFailAction implements Action {
    readonly type = CustomersActionTypes.REMOVE_CUSTOMER_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export class GetCustomerDetailAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMER_DETAIL;
    constructor(public payload: GetCustomerDetailReq) {}
}

export class GetCustomerDetailSuccessAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMER_DETAIL_SUCCESS;
    constructor(public payload: GetCustomerDetailsResponse) {}
}

export class GetCustomerDetailFailAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMER_DETAIL_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export class GetCustomerBudgetDetailAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMER_BUDGET_DETAIL;
    constructor(public payload: CustomerBudgetReq) {}
}

export class GetCustomerBudgetDetailSuccessAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMER_BUDGET_DETAIL_SUCCESS;
    constructor(public payload: CustomerBudgetDetailContract) {}
}

export class GetCustomerBudgetDetailFailAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMER_BUDGET_DETAIL_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export class GetCustomerUserListAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMER_USERS;
    constructor(public payload: CustomerUsersReq) {}
}

export class GetCustomerUserListSuccessAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMER_USERS_SUCCESS;
    constructor(public payload: CustomerUserListContract) {}
}

export class GetCustomerUserListFailAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMER_USERS_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export class CustomerDetailUpdateAction implements Action {
    readonly type = CustomersActionTypes.CUSTOMER_DETAIL_UPDATE;
    constructor(public payload: DetailUpdateReq) {}
}

export class CustomerDetailUpdateSuccessAction implements Action {
    readonly type = CustomersActionTypes.CUSTOMER_DETAIL_UPDATE_SUCCESS;
    constructor(public payload: DetailsUpdateResp) {}
}

export class CustomerDetailUpdateFailAction implements Action {
    readonly type = CustomersActionTypes.CUSTOMER_DETAIL_UPDATE_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export class CustomerListUpdateAction implements Action {
  readonly type = CustomersActionTypes.CUSTOMER_LIST_UPDATE;
  constructor(public payload: CustomerListUpdateReq) {}
}

export class CustomerListUpdateSuccessAction implements Action {
  readonly type = CustomersActionTypes.CUSTOMER_LIST_UPDATE_SUCCESS;
  constructor(public payload: CustomerListUpdateResp) {}
}

export class CustomerListUpdateFailAction implements Action {
  readonly type = CustomersActionTypes.CUSTOMER_LIST_UPDATE_FAIL;
  constructor(public payload: ErrorResponse) {}
}

export type CustomersActions = GetCustomerAction |
                               GetCustomerSuccessAction |
                               GetCustomerFailAction |
                               CreateCustomerAction |
                               CreateCustomerSuccessAction |
                               CreateCustomerFailAction |
                               RemoveCustomerAction |
                               RemoveCustomerSuccessAction |
                               RemoveCustomerFailAction |
                               GetCustomerDetailAction |
                               GetCustomerDetailSuccessAction | GetCustomerDetailFailAction |
                               GetCustomerBudgetDetailAction |
                               GetCustomerBudgetDetailSuccessAction | GetCustomerBudgetDetailFailAction |
                               GetCustomerUserListAction | GetCustomerUserListSuccessAction |
                               GetCustomerUserListFailAction | CustomerDetailUpdateAction |
                               CustomerDetailUpdateSuccessAction |  CustomerDetailUpdateFailAction |
                               CustomerListUpdateAction | CustomerListUpdateSuccessAction | CustomerListUpdateFailAction


export const initialCustomerState: CustomersState = {
    loading: false,
    loadingMsg: '',
    customers: [],
    count: 0,
    currentPage: 1,

}

export const selectorCustomers = (state: AppState) => state.customers.custState || initialCustomerState;

export function customerReducer(
    state: CustomersState = initialCustomerState,
    action: CustomersActions
): CustomersState {
    switch (action.type) {
        case CustomersActionTypes.GET_CUSTOMERS:
            return {
                ...state,
                loading: true,
                loadingMsg: 'Retreiving customers...'
            }
        case CustomersActionTypes.GET_CUSTOMERS_SUCCESS:
            return {
                ...state,
                customers: action.payload.customers,
                count: action.payload.customers.length,
                loading: false,
                loadingMsg: '',
            }
        case CustomersActionTypes.GET_CUSTOMERS_FAIL:
            return {
                ...state,
                isError: true,
                code: action.payload.code,
                message: action.payload.message,
            }
        case CustomersActionTypes.CREATE_CUSTOMER: {
            console.log('Customer Payload####', action.payload)
            return {
                ...state,
                loading: true,
                loadingMsg: 'Creating Customer...'
            }
        }
        case CustomersActionTypes.CREATE_CUSTOMER_SUCCESS: {
            let customers = state.customers;
            let count = state.count;
            return {
                ...state,
                loading: false,
                loadingMsg: '',
                customers: patchItems(customers, action.payload.customer),
                count: count + 1,
                message: 'Customer created sucessfully'
            }
        }
        case CustomersActionTypes.CREATE_CUSTOMER_FAIL: {
            let customers = state.customers;
            let count = state.count;
            return {
                ...state,
                isError: true,
                loading: false,
                message: action.payload.message,
                code: action.payload.code
            }
        }
        case CustomersActionTypes.REMOVE_CUSTOMER: {
            console.log('Remove Customer Payload####', action.payload)
            return {
                ...state,
                loading: true,
                loadingMsg: 'Deleting Customer...'
            }
        }
        case CustomersActionTypes.REMOVE_CUSTOMER_SUCCESS: {
            let customers = state.customers;
            let count = state.count;
            return {
                ...state,
                loading: false,
                loadingMsg: '',
                customers: removeItem(customers, action.payload.customer),
                count: count + 1,
                message: 'Customer sucessfully deleted.'
            }
        }
        case CustomersActionTypes.REMOVE_CUSTOMER_FAIL: {
            let customers = state.customers;
            let count = state.count;
            return {
                ...state,
                isError: true,
                loading: false,
                message: action.payload.message,
                code: action.payload.code
            }
        }

        case CustomersActionTypes.GET_CUSTOMER_DETAIL: {
            return {
                ...state,
                loading: true,
                loadingMsg: 'Retreiving Customer Detail...'
            }
        }
        case CustomersActionTypes.GET_CUSTOMER_DETAIL_SUCCESS: {
            return {
                ...state,
                loading: false,
                loadingMsg: '',
                customerDetail: action.payload.selectedCustomer,
                message: ''
            }
        }
        case CustomersActionTypes.GET_CUSTOMER_DETAIL_FAIL: {
            let customers = state.customers;
            let count = state.count;
            return {
                ...state,
                isError: true,
                loading: false,
                message: action.payload.message,
                code: action.payload.code
            }
        }
        case CustomersActionTypes.GET_CUSTOMER_BUDGET_DETAIL: {
            return {
                ...state,
                loading: true,
                loadingMsg: 'Get Customer Budget Detail...'
            }
        }
        case CustomersActionTypes.GET_CUSTOMER_BUDGET_DETAIL_SUCCESS: {
           /*  console.log(action.payload); */
            return {
                ...state,
                loading: false,
                loadingMsg: '',
                budgetDetail: action.payload.budgetDetail,
                remainingBudget : action.payload.remainingBudget,
                message: 'Customer Budget detail sucessfully .'
            }
        }
        case CustomersActionTypes.GET_CUSTOMER_BUDGET_DETAIL_FAIL: {
            let customers = state.customers;
            let count = state.count;
            return {
                ...state,
                isError: true,
                loading: false,
                message: action.payload.message,
                code: action.payload.code
            }
        }

        case CustomersActionTypes.GET_CUSTOMER_USERS: {
            return {
                ...state,
                loading: true,
                loadingMsg: 'Get Customer Budget Detail...'
            }
        }
        case CustomersActionTypes.GET_CUSTOMER_USERS_SUCCESS: {
           /*  console.log(action.payload); */
            return {
                ...state,
                loading: false,
                loadingMsg: '',
                customerUserList : action.payload.userList,
                count : action.payload.count,
                message: 'Customer Budget detail sucessfully .'
            }
        }
        case CustomersActionTypes.GET_CUSTOMER_USERS_FAIL: {
            let customers = state.customers;
            let count = state.count;
            return {
                ...state,
                isError: true,
                loading: false,
                message: action.payload.message,
                code: action.payload.code
            }
        }

        case CustomersActionTypes.CUSTOMER_DETAIL_UPDATE: {
            return {
                ...state,
                loading: true,
                loadingMsg: 'Update customer detail...'
            }
        }
        case CustomersActionTypes.CUSTOMER_DETAIL_UPDATE_SUCCESS: {
           /*  console.log(action.payload); */
            return {
                ...state,
                loading: false,
                loadingMsg: '',
                customerDetail: action.payload.updatedCustomer
            }
        }
        case CustomersActionTypes.CUSTOMER_DETAIL_UPDATE_FAIL: {
            let customers = state.customers;
            let count = state.count;
            return {
                ...state,
                isError: true,
                loading: false,
                message: action.payload.message,
                code: action.payload.code
            }
        }
        case CustomersActionTypes.CUSTOMER_LIST_UPDATE: {
            return {
                ...state,
                loading: true,
                loadingMsg: 'Update customer detail...'
            }
        }
        case CustomersActionTypes.CUSTOMER_LIST_UPDATE_SUCCESS: {
          /*  console.log(action.payload); */
            return {
                ...state,
                loading: false,
                loadingMsg: '',
                customers: action.payload.updatedCustomers
            }
        }
        case CustomersActionTypes.CUSTOMER_DETAIL_UPDATE_FAIL: {
            let customers = state.customers;
            let count = state.count;
            return {
                ...state,
                isError: true,
                loading: false,
                message: action.payload.message,
                code: action.payload.code
            }
        }

        default:
            return state;
    }
}

function patchItems(items: any[], item: any): any[] {
    items.push(item);
    return items;
}

function removeItem(items: any[], item: any): any[] {
    items = items.filter((i) => (i.id != item.id));
    return items;
}
