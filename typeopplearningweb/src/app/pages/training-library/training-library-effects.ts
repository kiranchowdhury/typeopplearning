import { TrainingLibraryContract, TrainingLibraryEditResponseContract } from './training-library-contract';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { TrainingLibraryService } from "./training-library-service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from "rxjs/operators";
import { TrainingLibraryActionTypes, GetTrainingLibraryAction, GetTrainingLibrarySuccessAction, GetTrainingLibraryFailAction, EditTrainingLibraryAction, EditTrainingLibrarySuccessAction, EditTrainingLibraryFailedAction, CreateTrainingLibraryAction, CreateTrainingLibrarySuccessAction, CreateTrainingLibraryFailedAction, RemoveTrainingLibraryAction, RemoveTrainingLibraryActionFailed } from './training-library-reducer';

@Injectable()
export class TrainingLibraryEffects {
    constructor(
        private action$: Actions<Action>,
        private trainingLibraryService: TrainingLibraryService,
        private router: Router,
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
    editTrainingLibraries(): Observable<Action> {
      return this.action$.ofType(TrainingLibraryActionTypes.EDIT_TRAINING_LIBRARY)
      .pipe( switchMap((action: EditTrainingLibraryAction) =>
          this.trainingLibraryService.editTrainingLibrary(action.payload).pipe(
            map((resp: TrainingLibraryEditResponseContract) => (resp.status === 1)? new EditTrainingLibrarySuccessAction(resp)
          : new EditTrainingLibraryFailedAction({code: resp.code, message: resp.message}) )
          )
    ))
    }

    @Effect()
    createTrainingLibraries(): Observable<Action> {
      return this.action$.ofType(TrainingLibraryActionTypes.CREATE_TRAINING_LIBRARY)
      .pipe( switchMap((action: CreateTrainingLibraryAction) =>
          this.trainingLibraryService.createTrainingLibrary(action.payload).pipe(
            map((resp: TrainingLibraryContract) => (resp.status === 1)? new CreateTrainingLibrarySuccessAction(resp):
          new CreateTrainingLibraryFailedAction({code: resp.code, message: resp.message}))
          )))
    }

    @Effect()
    removeTrainingLibrary(): Observable<Action> {
      return this.action$.ofType(TrainingLibraryActionTypes.REMOVE_TRAINING_LIBRARY)
      .pipe( switchMap((action: RemoveTrainingLibraryAction) =>
        this.trainingLibraryService.removeTrainingLibrary({id: action.payload.id}).pipe(
          map((resp: TrainingLibraryEditResponseContract) => (resp.status === 1)? new GetTrainingLibraryAction()
          : new RemoveTrainingLibraryActionFailed({code: resp.code, message: resp.message}))
        )))
    }
}
