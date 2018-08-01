import { TrainingLibraryState, TrainingLibrary } from './training-library-state';
import { TrainingLibraryContract, TrainingLibraryEditRequestContract, TrainingLibraryEditResponseContract, CreateTrainingLibraryRequestContract, RemoveTrainingRequestContract } from './training-library-contract';
import { Action } from "@ngrx/store";
import { ErrorResponse } from "../../@core/error/error-response";
import { AppState } from "../../@models/app-state";
import { TrainingActionTypes } from '../training/training-reducer';

export enum TrainingLibraryActionTypes {
    GET_TRAINING_LIBRARY = 'Get Training Library',
    GET_TRAINING_LIBRARY_SUCCESS = 'Get Training Library Success',
    GET_TRAINING_LIBRARY_FAIL = 'Get Training Library Fail',
    EDIT_TRAINING_LIBRARY = 'Edit Training',
    EDIT_TRAINING_LIBRARY_SUCCESS= 'Edit Training Success',
    EDIT_TRAINING_LIBRARY_FAIL= 'Edit Training Failed',
    CREATE_TRAINING_LIBRARY = 'Create Training Library',
    CREATE_TRAINING_LIBRARY_SUCCESS= 'Create Training Library Success',
    CREATE_TRAINING_LIBRARY_FAILED= 'Create Training Library Failed',
    REMOVE_TRAINING_LIBRARY = 'Remove Training Library',
    REMOVE_TRAINING_LIBRARY_SUCCESS = 'Remove Training Library Success',
    REMOVE_TRAINING_LIBRARY_FAILED = 'Remove Training Library Failed',
}

export class GetTrainingLibraryAction implements Action {
    readonly type = TrainingLibraryActionTypes.GET_TRAINING_LIBRARY;
    constructor() {}
}

export class GetTrainingLibrarySuccessAction implements Action {
    readonly type = TrainingLibraryActionTypes.GET_TRAINING_LIBRARY_SUCCESS;
    constructor(public payload: TrainingLibraryContract) {}
}

export class GetTrainingLibraryFailAction implements Action {
    readonly type = TrainingLibraryActionTypes.GET_TRAINING_LIBRARY_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export class EditTrainingLibraryAction implements Action {
  readonly  type = TrainingLibraryActionTypes.EDIT_TRAINING_LIBRARY;
  constructor(public payload: TrainingLibraryEditRequestContract){}
}

export class EditTrainingLibrarySuccessAction implements Action {
  readonly type = TrainingLibraryActionTypes.EDIT_TRAINING_LIBRARY_SUCCESS;
  constructor(public payload : TrainingLibraryEditResponseContract){}
}

export class EditTrainingLibraryFailedAction implements Action {
  readonly type = TrainingLibraryActionTypes.EDIT_TRAINING_LIBRARY_FAIL;
  constructor (public error: ErrorResponse){}
}

export class CreateTrainingLibraryAction implements Action {
  readonly type = TrainingLibraryActionTypes.CREATE_TRAINING_LIBRARY;
  constructor(public payload: CreateTrainingLibraryRequestContract) {}
}

export class CreateTrainingLibrarySuccessAction implements Action {
  readonly type = TrainingLibraryActionTypes.CREATE_TRAINING_LIBRARY_SUCCESS;
  constructor (public payload: TrainingLibraryContract){}
}

export class CreateTrainingLibraryFailedAction implements Action {
  readonly type = TrainingLibraryActionTypes.CREATE_TRAINING_LIBRARY_FAILED;
  constructor (public error: ErrorResponse){}
}

export class RemoveTrainingLibraryAction implements Action {
  readonly type = TrainingLibraryActionTypes.REMOVE_TRAINING_LIBRARY;
  constructor (public payload : RemoveTrainingRequestContract){}
}

export class RemoveTrainingLibraryActionSuccess implements Action {
  readonly type = TrainingLibraryActionTypes.REMOVE_TRAINING_LIBRARY_SUCCESS;
  constructor(public payload: TrainingLibraryEditResponseContract) {}
}

export class RemoveTrainingLibraryActionFailed implements Action {
  readonly type = TrainingLibraryActionTypes.REMOVE_TRAINING_LIBRARY_FAILED;
  constructor (public error: ErrorResponse){}
}

export type TrainingLibraryActions = GetTrainingLibraryAction | GetTrainingLibrarySuccessAction | GetTrainingLibraryFailAction
                          | EditTrainingLibraryAction |EditTrainingLibrarySuccessAction | EditTrainingLibraryFailedAction |
                          CreateTrainingLibraryAction | CreateTrainingLibrarySuccessAction | CreateTrainingLibraryFailedAction |
                          RemoveTrainingLibraryAction | RemoveTrainingLibraryActionSuccess | RemoveTrainingLibraryActionFailed

export const initialTrainingLibraryState: TrainingLibraryState = {
    loading: false,
    loadingMsg: '',
    trainingLibraries: [],
    count: 0,
    currentPage: 1,

}

export const selectorTrainingLibrary = (state: AppState) => state.trainingLibrary.trainingLibraryState || initialTrainingLibraryState;

export function trainingLibraryReducer(
    state: TrainingLibraryState = initialTrainingLibraryState,
    action: TrainingLibraryActions
): TrainingLibraryState {
    switch (action.type) {
        case TrainingLibraryActionTypes.GET_TRAINING_LIBRARY:
            return {
                ...state,
                loading: true,
                loadingMsg: 'Retreiving training libraries...',
                trainingSave: false
            }
        case TrainingLibraryActionTypes.GET_TRAINING_LIBRARY_SUCCESS:
            return {
                ...state,
                trainingLibraries: action.payload.trainingDetailsList,
                count: action.payload.trainingDetailsList.length,
                loading: false,
                loadingMsg: '',
            }
        case TrainingLibraryActionTypes.GET_TRAINING_LIBRARY_FAIL:
            return {
                ...state,
                errorCode: action.payload.code,
                errorMsg: action.payload.message,
            }

        case TrainingLibraryActionTypes.EDIT_TRAINING_LIBRARY :
        return {
          ...state,
          loading: true,
          loadingMsg: 'Saving Training Library Data',
          errorMsg: '',
          errorCode: ''
        }

        case TrainingLibraryActionTypes.EDIT_TRAINING_LIBRARY_SUCCESS :
        return {
          ...state,
          loading: false,
          loadingMsg: action.payload.message,
          trainingSave: true
        }
        case TrainingLibraryActionTypes.EDIT_TRAINING_LIBRARY_FAIL :
        return {
          ...state,
          loading: false,
          loadingMsg: '',
          errorCode: action.error.code,
          errorMsg: action.error.message,
          trainingSave: false
        }
        case TrainingLibraryActionTypes.CREATE_TRAINING_LIBRARY :
        return {
          ...state,
          loading: true,
          loadingMsg: 'Creating Library Action',
          trainingSave: false
        }
        case TrainingLibraryActionTypes.CREATE_TRAINING_LIBRARY_SUCCESS :
        return {
          ...state,
          loading: false,
          loadingMsg: '',
          trainingSave: false,
          trainingLibraries: action.payload.trainingDetailsList
        }
        case TrainingLibraryActionTypes.CREATE_TRAINING_LIBRARY_FAILED :
        return {
          ...state,
          loading: false,
          loadingMsg: '',
          errorCode: action.error.code,
          errorMsg: action.error.message,
          trainingSave: false
        }
        case TrainingLibraryActionTypes.REMOVE_TRAINING_LIBRARY :
        return {
          ...state,
          loading: true,
          loadingMsg: 'Removing Training...',
          trainingSave: false
        }
        case TrainingLibraryActionTypes.REMOVE_TRAINING_LIBRARY_SUCCESS :
        return {
          ...state,
          loading: false,
          loadingMsg: '',
          trainingSave: false
        }
        case TrainingLibraryActionTypes.REMOVE_TRAINING_LIBRARY_FAILED:
        return {
          ...state,
          loading: false,
          loadingMsg: '',
          errorCode: action.error.code,
          errorMsg: action.error.message,
          trainingSave: false
        }
        default:
            return state;
    }
}
