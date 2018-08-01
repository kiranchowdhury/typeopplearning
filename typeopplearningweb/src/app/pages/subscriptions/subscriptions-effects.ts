import { TrainingCatContract, EquipmentDataContract, EquipmentTypeContract, InvoiceContract, PurchaseTrainingRequestContract, PurchaseTrainingResponseContract,
   AllowedTrainingCategoryResponseContract,
   AllowedTrainingDetailContract} from './subscriptions-contract';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { SubscriptionService } from "./subscriptions-service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from "rxjs/operators";
import { TrainingCategoryActionTypes, GetTrainingCategoryAction, GetTrainingCategorySuccessAction,
    GetTrainingCategoryFailAction, GetEquipmentTypeListAction, GetEquipmentTypeListSuccessAction,
    GetEquipmentTypeListFailAction, GetEquipmentTypeDataListAction, GetEquipmentTypeDataListSuccessAction,
    GetEquipmentTypeDataListFailAction, GetInvoiceListAction, GetInvoiceListSuccessAction,
    GetInvoiceListFailAction,
    PurchaseTrainingAction,
    PurchaseTrainingSuccessAction,
    PurchaseTrainingFailedAction, AllowedTrainingCategoryAction, AllowedTrainingCategorySuccessAction,
    AllowedTrainingCategoryFailedAction,
    AllowedTrainingDetailAction,
    AllowedTrainingDetailSuccessAction,
    AllowedTrainingDetailFailedAction} from './subcriptions-reducer';
import { TrainingLibraryActionTypes, GetTrainingLibraryAction, GetTrainingLibrarySuccessAction, GetTrainingLibraryFailAction } from '../training-library/training-library-reducer';
import { TrainingLibraryContract } from '../training-library/training-library-contract';
import { TrainingLibraryService } from '../training-library/training-library-service';

@Injectable()
export class TrainingCatEffects {
    constructor(
        private action$: Actions<Action>,
        private subscriptionService: SubscriptionService,
        private router: Router,
        private trainingLibraryService: TrainingLibraryService
    ) {}

    @Effect()
    getTrainingLibraries(): Observable<Action> {
        return this.action$.ofType(TrainingLibraryActionTypes.GET_TRAINING_LIBRARY).pipe(
            switchMap((action: GetTrainingLibraryAction) =>
                this.trainingLibraryService.getTrainingLibrary()
                .pipe(
                    map((resp: TrainingLibraryContract) => (resp.status === 1) ?
                    new GetTrainingLibrarySuccessAction(resp)
                    : new GetTrainingLibraryFailAction({code: resp.code, message: resp.message}))
                )
            )
        )
    }
    @Effect()
    getTrainingSubscription(): Observable<Action> {
        return this.action$.ofType(TrainingCategoryActionTypes.GET_TRAINING_CATEGORY).pipe(
            switchMap((action: GetTrainingCategoryAction) =>
              this.trainingLibraryService.getTrainingLibrary()
                .pipe(
                    map((resp: TrainingLibraryContract) => (resp.status === 1) ?
                    new GetTrainingCategorySuccessAction(resp)
                    : new GetTrainingCategoryFailAction({code: resp.code, message: resp.message}))
                )
            )
        )
    }

    @Effect()
    getEquipmentTypeList(): Observable<Action> {
        return this.action$.ofType(TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST).pipe(
        switchMap((action: GetEquipmentTypeListAction)=>
        this.subscriptionService.getEquipmentTypesList(action.payload).pipe(
            map((response: EquipmentTypeContract) =>
        (response.status === 1)? new GetEquipmentTypeListSuccessAction(response) :
        new GetEquipmentTypeListFailAction({code: response.code, message: response.message}))
        ))
        )
    }

    @Effect()
    getEquipmentDataTypeList(): Observable<Action> {
        return this.action$.ofType(TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST).pipe(
        switchMap((action: GetEquipmentTypeDataListAction)=>
        this.subscriptionService.getEquipmentListOnType(action.payload).pipe(
            map((response: EquipmentDataContract) =>
        (response.status === 1)? new GetEquipmentTypeDataListSuccessAction(response) :
        new GetEquipmentTypeDataListFailAction({code: response.code, message: response.message}))
        ))
        )
    }

    @Effect()
    getInvoiceList(): Observable<Action> {
        return this.action$.ofType(TrainingCategoryActionTypes.GET_INVOICE_LIST).pipe(
        switchMap((action: GetInvoiceListAction)=>
        this.subscriptionService.getInvoiceList().pipe(
            map((response: InvoiceContract) =>
        (response.status === 1)? new GetInvoiceListSuccessAction(response) :
        new GetInvoiceListFailAction({code: response.code, message: response.message}))
        ))
        )
    }

    @Effect()
    postPurchaseTraining(): Observable<Action> {
      return this.action$.ofType(TrainingCategoryActionTypes.PURCHASE_TRAINING).pipe(
        switchMap((action: PurchaseTrainingAction) =>
        this.subscriptionService.postPurchaseTraining(action.payload).pipe(
          map((response: PurchaseTrainingResponseContract) =>
        (response.status === 1) ? new PurchaseTrainingSuccessAction(response):
      new PurchaseTrainingFailedAction({code: response.code, message: response.message}))
        ))
      )
    }

    //effects used in allowed training
    @Effect()
    getAllowedTrainigCategory(): Observable<Action> {
      return this.action$.ofType(TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_CATEGORY).pipe(
        switchMap((action: AllowedTrainingCategoryAction) =>
        this.subscriptionService.getAllowedTrainingCategory().pipe(
          map((response: AllowedTrainingCategoryResponseContract) =>
        (response.status === 1) ? new AllowedTrainingCategorySuccessAction(response):
      new AllowedTrainingCategoryFailedAction({code: response.code, message: response.message}))
        ))
      )
    }

    @Effect()
    getAllowedTrainigDetails(): Observable<Action> {
      return this.action$.ofType(TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_DETAIL).pipe(
        switchMap((action: AllowedTrainingDetailAction) =>
        this.subscriptionService.getAllowedTrainingDetails(action.payload).pipe(
          map((response: AllowedTrainingDetailContract) =>
        (response.status === 1) ? new AllowedTrainingDetailSuccessAction(response):
      new AllowedTrainingDetailFailedAction({code: response.code, message: response.message}))
        ))
      )
    }

}
