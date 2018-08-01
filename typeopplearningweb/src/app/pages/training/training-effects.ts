import { TrainingCategoryContract, EquipmentTypeContract, EquipmentDataContract, EquipmentDetailContract, EquipmentCategoryCon } from './training-contract';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { TrainingService } from "./training.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from "rxjs/operators";
import { TrainingActionTypes, GetEquipmentListAction,
  GetEquipmentListSuccessAction, GetEquipmentListFailedAction,
  GetEquipmentTypeListAction, GetEquipmentTypeListSuccessAction,
  GetEquipmentTypeListFailAction, GetEquipmentTypeDataListAction,
  GetEquipmentTypeDataListSuccessAction, GetEquipmentTypeDataListFailAction,
  GetTrainingStartDataAction, GetTrainingStartDataSuccessAction, GetTrainingStartDataFailAction, GetEquipmentCategoryNameAction, GetEquipmentCategoryNameSuccessAction, GetEquipmentCategoryNameFailAction } from './training-reducer';
import { RouterEvent } from '@angular/router/src/events';

@Injectable()
export class TrainingEffects {
  constructor(
    private $action: Actions<Action>,
    private trainingService: TrainingService
  ){}


  @Effect()
  getEquipmentList(): Observable<Action> {
    return this.$action.ofType(TrainingActionTypes.GET_EQUIPMENT_LIST).pipe(
      switchMap((action: GetEquipmentListAction)=>
      this.trainingService.getEquipmentList().pipe(
        map((response: TrainingCategoryContract) =>
      (response.status === 1)? new GetEquipmentListSuccessAction(response) :
    new GetEquipmentListFailedAction({code: response.code, message: response.message}))
      ))
    )
  }

  @Effect()
  getEquipmentCategoryName(): Observable<Action> {
    return this.$action.ofType(TrainingActionTypes.GET_EQUIPMENT_CATEGORY_NAME).pipe(
      switchMap((action: GetEquipmentCategoryNameAction)=>
      this.trainingService.getEquipmentCategoryName(action.payload).pipe(
        map((response: EquipmentCategoryCon) =>
      (response.status === 1)? new GetEquipmentCategoryNameSuccessAction(response) :
    new GetEquipmentCategoryNameFailAction({code: response.code, message: response.message}))
      ))
    )
  }

  @Effect()
  getEquipmentTypeList(): Observable<Action> {
    return this.$action.ofType(TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST).pipe(
      switchMap((action: GetEquipmentTypeListAction)=>
      this.trainingService.getEquipmentTypesList(action.payload).pipe(
        map((response: EquipmentTypeContract) =>
      (response.status === 1)? new GetEquipmentTypeListSuccessAction(response) :
    new GetEquipmentTypeListFailAction({code: response.code, message: response.message}))
      ))
    )
  }

  @Effect()
  getEquipmentDataTypeList(): Observable<Action> {
    return this.$action.ofType(TrainingActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST).pipe(
      switchMap((action: GetEquipmentTypeDataListAction)=>
      this.trainingService.getEquipmentListOnType(action.payload).pipe(
        map((response: EquipmentDataContract) =>
      (response.status === 1)? new GetEquipmentTypeDataListSuccessAction(response) :
    new GetEquipmentTypeDataListFailAction({code: response.code, message: response.message}))
      ))
    )
  }

  @Effect()
  getEquipmentDetail(): Observable<Action> {
    return this.$action.ofType(TrainingActionTypes.GET_TRAINING_START_DATA).pipe(
      switchMap((action: GetTrainingStartDataAction)=>
      this.trainingService.getTrainingStartData(action.payload).pipe(
        map((response: EquipmentDetailContract) =>
      (response.status === 1)? new GetTrainingStartDataSuccessAction(response) :
    new GetTrainingStartDataFailAction({code: response.code, message: response.message}))
      ))
    )
  }

}
