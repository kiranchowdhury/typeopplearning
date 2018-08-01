import { InvoiceContract } from './invoices-contract';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { InvoiceService } from "./invoices-service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from "rxjs/operators";
import { InvoiceActionTypes, GetInvoiceListAction, GetInvoiceListSuccessAction, GetInvoiceListFailAction } from './invoices-reducer';

@Injectable()
export class InvoiceEffects {
    constructor(
        private action$: Actions<Action>,
        private invoiceService: InvoiceService,
        private router: Router,
    ) {}

    @Effect()
    getInvoiceList(): Observable<Action> {
        return this.action$.ofType(InvoiceActionTypes.GET_INVOICE_LIST).pipe(
            switchMap((action: GetInvoiceListAction) =>
                this.invoiceService.getInvoiceList()
                .pipe(
                    map((resp: InvoiceContract) => (resp.status === 1) ?
                    new GetInvoiceListSuccessAction(resp)
                    : new GetInvoiceListFailAction({code: resp.code, message: resp.message}))
                )
            )
        )
    }
    
}
