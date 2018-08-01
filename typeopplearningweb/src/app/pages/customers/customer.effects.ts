import { GetCertificateResponse } from './../certificates/certificate-contracts';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { CustomersService } from "./customers.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { CustomersActionTypes, GetCustomerAction, GetCustomerSuccessAction, GetCustomerFailAction,
    CreateCustomerAction, CreateCustomerSuccessAction, CreateCustomerFailAction, RemoveCustomerAction,
    RemoveCustomerSuccessAction, RemoveCustomerFailAction, GetCustomerDetailAction,
    GetCustomerDetailSuccessAction, GetCustomerDetailFailAction, GetCustomerBudgetDetailAction,
    GetCustomerBudgetDetailSuccessAction, GetCustomerBudgetDetailFailAction,GetCustomerUserListAction,
    GetCustomerUserListSuccessAction, GetCustomerUserListFailAction, CustomerDetailUpdateAction,
    CustomerDetailUpdateSuccessAction, CustomerDetailUpdateFailAction, CustomerListUpdateAction,
    CustomerListUpdateSuccessAction, CustomerListUpdateFailAction } from "./customers.reducer";
import { switchMap, map, tap } from "rxjs/operators";
import { GetCustomersResponse, CreateCustomerResponse, GetCustomerDetailReq, CustomerBudgetDetailContract,
    CustomerUsersReq, CustomerUserListContract, GetCustomerDetailsResponse, DetailsUpdateResp,
    CustomerListUpdateResp } from "./customer-contracts";

@Injectable()
export class CustomersEffects {
    constructor(
        private action$: Actions<Action>,
        private customerService: CustomersService,
        private router: Router,
    ) {}

    @Effect()
    getCustomers(): Observable<Action> {
        return this.action$.ofType(CustomersActionTypes.GET_CUSTOMERS).pipe(
            switchMap((action: GetCustomerAction) =>
                this.customerService.getCustomers()
                .pipe(
                    map((resp: GetCustomersResponse) => (resp.status === 1) ?
                    new GetCustomerSuccessAction(resp)
                    : new GetCustomerFailAction({code: resp.code, message: resp.message}))
                )
            )
        )
    }

    @Effect()
    createCustomer(): Observable<Action> {
        // console(act)
        return this.action$.ofType(CustomersActionTypes.CREATE_CUSTOMER).pipe(
         //   tap(() => console.log('In the effects,')),
            switchMap((action: CreateCustomerAction) =>
                this.customerService.createCustomer(action.payload)
                .pipe(
                    map((resp: CreateCustomerResponse) => (resp.status === 1)?
                    new GetCustomerAction()
                    : new CreateCustomerFailAction({code: resp.code, message: resp.message}))
                ))
        )
    }

    @Effect()
    removeCustomer(): Observable<Action> {
        return this.action$.ofType(CustomersActionTypes.REMOVE_CUSTOMER).pipe(
            //   tap(() => console.log('In the effects,')),
               switchMap((action: RemoveCustomerAction) =>
                   this.customerService.removeCustomer(action.payload)
                   .pipe(
                       map((resp: CreateCustomerResponse) => (resp.status === 1)?
                       new GetCustomerAction()
                       : new RemoveCustomerFailAction({code: resp.code, message: resp.message}))
                   ))
           )
    }

    @Effect()
    getCustomerDetail(): Observable<Action> {
        return this.action$.ofType(CustomersActionTypes.GET_CUSTOMER_DETAIL).pipe(
            //   tap(() => console.log('In the effects,')),
               switchMap((action: GetCustomerDetailAction) =>
                   this.customerService.getCustomerDetail(action.payload)
                   .pipe(
                       map((resp: GetCustomerDetailsResponse) => (resp.status === 1)?
                       new GetCustomerDetailSuccessAction(resp)
                       : new GetCustomerDetailFailAction({code: resp.code, message: resp.message}))
                   ))
           )
    }

    @Effect()
    getCustomerBudgetDetail(): Observable<Action> {
        return this.action$.ofType(CustomersActionTypes.GET_CUSTOMER_BUDGET_DETAIL).pipe(
            //   tap(() => console.log('In the effects,')),
               switchMap((action: GetCustomerBudgetDetailAction) =>
                   this.customerService.getCustomerBudgetDetail(action.payload)
                   .pipe(
                       map((resp: CustomerBudgetDetailContract) => (resp.status === 1)?
                       new GetCustomerBudgetDetailSuccessAction(resp)
                       : new GetCustomerBudgetDetailFailAction({code: resp.code, message: resp.message}))
                   ))
           )
    }

    @Effect()
    getCustomerUserList(): Observable<Action> {
        return this.action$.ofType(CustomersActionTypes.GET_CUSTOMER_USERS).pipe(
            //   tap(() => console.log('In the effects,')),
               switchMap((action: GetCustomerUserListAction) =>
                   this.customerService.getCustomerUserList(action.payload)
                   .pipe(
                       map((resp: CustomerUserListContract) => (resp.status === 1)?
                       new GetCustomerUserListSuccessAction(resp)
                       : new GetCustomerUserListFailAction({code: resp.code, message: resp.message}))
                   ))
           )
    }

    @Effect()
    updateCustomersDetail(): Observable<Action> {
        return this.action$.ofType(CustomersActionTypes.CUSTOMER_DETAIL_UPDATE).pipe(
            //   tap(() => console.log('In the effects,')),
               switchMap((action: CustomerDetailUpdateAction) =>
                   this.customerService.updateCustomerDetail(action.payload)

                   .pipe(
                       map((resp: DetailsUpdateResp) => (resp.status === 1)?
                       new CustomerDetailUpdateSuccessAction(resp)
                       : new CustomerDetailUpdateFailAction({code: resp.code, message: resp.message}))
                   ))
           )
    }

    @Effect()
    updateCustomersListDetail(): Observable<Action> {
        return this.action$.ofType(CustomersActionTypes.CUSTOMER_LIST_UPDATE).pipe(
            //   tap(() => console.log('In the effects,')),
               switchMap((action: CustomerListUpdateAction) =>
                   this.customerService.updateCustomerListDetail(action.payload)

                   .pipe(
                       map((resp: CustomerListUpdateResp) => (resp.status === 1)?
                       new CustomerListUpdateSuccessAction(resp)
                       : new CustomerListUpdateFailAction({code: resp.code, message: resp.message}))
                   ))
           )
    }

}
