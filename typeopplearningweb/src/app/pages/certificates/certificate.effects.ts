import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from "rxjs/operators";
import { CertificateService } from "./certificate.service";
import { CertificateActionTypes, GetCertificatesAction, GetCertificatesSuccessAction, GetCertificatesFailAction } from "./certificate-reducer"
import { CertificateContract, GetCertificateResponse } from "./certificate-contracts"

@Injectable()
export class CertificateEffects {
    constructor(
        private action$: Actions<Action>,
        private certificateService: CertificateService,
        private router: Router,
    ) {}

    @Effect()
    getCertificatesList(): Observable<Action> {
        return this.action$.ofType(CertificateActionTypes.GET_CERTIFICATES_ACTION).pipe(
            switchMap((action: GetCertificatesAction) =>
                this.certificateService.getCertificates()
                .pipe(
                    map((resp: GetCertificateResponse) => (resp.status === 1) ?
                    new GetCertificatesSuccessAction(resp)
                    : new GetCertificatesFailAction({code: resp.code, message: resp.message}))
                )
            )
        )
    }
}
