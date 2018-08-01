import { Action } from "@ngrx/store";
import { EquipmentTypeRes, EquipmentTypeContract,
  EquipmentTypeIdRequest, EquipmentDataContract, EquipmentDetailReq, EquipmentDetailContract,
  TrainingCategoryContract, EquipmentCatRequest, EquipmentCategoryCon} from "./training-contract";
import { ErrorResponse } from "../../@core/error/error-response";
//import { GetUserListAction } from "../user-list/user-list-reducer";
import { AppState } from "../../@models/app-state";
import { TrainingState } from "./training-state";

export enum TrainingActionTypes {
  GET_EQUIPMENT_LIST = "Get Equipment List",
  GET_EQUIPMENT_LIST_SUCCESS = "Get Equipment List Success",
  GET_EQUIPMENT_LIST_FAILED = "Get Equipment List Failed",

  GET_EQUIPMENT_CATEGORY_NAME = "Get Equipment Category Name",
  GET_EQUIPMENT_CATEGORY_NAME_SUCCESS = "Get Equipment Category Name Success",
  GET_EQUIPMENT_CATEGORY_NAME_FAILED = "Get Equipment Category Name Failed",

  GET_EQUIPMENT_TYPE_LIST = 'Get Equipment Type List',
  GET_EQUIPMENT_TYPE_LIST_SUCCESS = 'Get Equipment Type List Success',
  GET_EQUIPMENT_TYPE_LIST_FAIL = 'Get Equipment Type List Fail',

  GET_EQUIPMENT_TYPE_DATA_LIST = 'Get Equipment Type Data List',
  GET_EQUIPMENT_TYPE_DATA_LIST_SUCCESS = 'Get Equipment Type Data List Success',
  GET_EQUIPMENT_TYPE_DATA_LIST_FAIL = 'Get Equipment Type Data List Fail',

  GET_TRAINING_START_DATA = 'Get Training Start Data',
  GET_TRAINING_START_DATA_SUCCESS = 'Get Training Start Data Success',
  GET_TRAINING_START_DATA_FAIL = 'Get Training Start Data Fail',

}

export class GetEquipmentListAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_LIST;
  constructor() {}
}

export class GetEquipmentListSuccessAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_LIST_SUCCESS;
  constructor(public payload: TrainingCategoryContract) {}
}

export class GetEquipmentListFailedAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_LIST_FAILED;
  constructor(public payload: ErrorResponse) {}
}

export class GetEquipmentCategoryNameAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_CATEGORY_NAME;
  constructor(public payload: EquipmentCatRequest) {}
}

export class GetEquipmentCategoryNameSuccessAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_CATEGORY_NAME_SUCCESS;
  constructor(public payload: EquipmentCategoryCon) {}
}

export class GetEquipmentCategoryNameFailAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_CATEGORY_NAME_FAILED;
  constructor(public payload: ErrorResponse) {}
}

export class GetEquipmentTypeListAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST;
  constructor(public payload: EquipmentCatRequest) {}
}

export class GetEquipmentTypeListSuccessAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST_SUCCESS;
  constructor(public payload: EquipmentTypeContract) {}
}

export class GetEquipmentTypeListFailAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST_FAIL;
  constructor(public payload: ErrorResponse) {}
}

export class GetEquipmentTypeDataListAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST;
  constructor(public payload: EquipmentTypeIdRequest) {}
}

export class GetEquipmentTypeDataListSuccessAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST_SUCCESS;
  constructor(public payload: EquipmentDataContract) {}
}

export class GetEquipmentTypeDataListFailAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST_FAIL;
  constructor(public payload: ErrorResponse) {}
}

export class GetTrainingStartDataAction implements Action {
  readonly type = TrainingActionTypes.GET_TRAINING_START_DATA;
  constructor(public payload: EquipmentDetailReq) {}
}

export class GetTrainingStartDataSuccessAction implements Action {
  readonly type = TrainingActionTypes.GET_TRAINING_START_DATA_SUCCESS;
  constructor(public payload: EquipmentDetailContract) {}
}

export class GetTrainingStartDataFailAction implements Action {
  readonly type = TrainingActionTypes.GET_TRAINING_START_DATA_FAIL;
  constructor(public payload: ErrorResponse) {}
}


export type TrainingActions = GetEquipmentListAction |
                              GetEquipmentListSuccessAction |
                              GetEquipmentListFailedAction |
                              GetEquipmentTypeListAction |
                              GetEquipmentTypeListSuccessAction |
                              GetEquipmentTypeListFailAction |
                              GetEquipmentTypeDataListAction |
                              GetEquipmentTypeDataListSuccessAction |
                              GetEquipmentTypeDataListFailAction |
                              GetTrainingStartDataAction |
                              GetTrainingStartDataSuccessAction |
                              GetTrainingStartDataFailAction |
                              GetEquipmentCategoryNameAction | GetEquipmentCategoryNameSuccessAction |
                              GetEquipmentCategoryNameFailAction

export const initialTrainingState : TrainingState= {
  errorCode: '',
  errorMsg: '',
  loading: true,
  loadingMsg: 'Loading Equipments',
  equipmentList: [],
  count: 0,
  currentPage: 1
}

export const selectorTraining = (state: AppState) => state.training.trainingState || initialTrainingState;

export function trainingReducer(
  state: TrainingState = initialTrainingState,
  action: TrainingActions
): TrainingState {
  switch(action.type){
    case TrainingActionTypes.GET_EQUIPMENT_LIST :
    return {
      ...state,
      loading: true,
      loadingMsg: 'Loading Equipments Category'
    }
    case TrainingActionTypes.GET_EQUIPMENT_LIST_SUCCESS :
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      equipmentCategories: action.payload.equipmentCategories,
      count: action.payload.count
    }
    case TrainingActionTypes.GET_EQUIPMENT_LIST_FAILED :
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      errorCode: action.payload.code,
      errorMsg: action.payload.message
    }
    case TrainingActionTypes.GET_EQUIPMENT_CATEGORY_NAME :
    //console.log('into reducer==============');
    return {
      ...state,
      loading: true,
      loadingMsg: 'Loading Equipments Category'
    }
    case TrainingActionTypes.GET_EQUIPMENT_CATEGORY_NAME_SUCCESS :
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      equipmentCategory: action.payload.equipmentCategory

    }
    case TrainingActionTypes.GET_EQUIPMENT_CATEGORY_NAME_FAILED :
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      errorCode: action.payload.code,
      errorMsg: action.payload.message
    }

    case TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST:
    //console.log('=========11==on retreiving====');
        return {
            ...state,
            loading: true,
            loadingMsg: 'Retreiving equipment types...'
        }
    case TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST_SUCCESS:
    console.log('=============in reducer==============');
    console.log(action.payload);
      return {
            ...state,
            equipmentDetails: action.payload.equipmentDetails,
            count: action.payload.equipmentDetails.length,
            loading: false,
            loadingMsg: '',
        }
    case TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST_FAIL:
        return {
            ...state,
            errorCode: action.payload.code,
            errorMsg: action.payload.message,
        }

    //Get Equipment Data list on Equipment Type Id
    case TrainingActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST:
        return {
            ...state,
            loading: true,
            loadingMsg: 'Retreiving equipment Data list types...'
        }
    case TrainingActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST_SUCCESS:

        return {
            ...state,
            equipmentData: action.payload.equipmentData,
            count: action.payload.equipmentData.length,
            loading: false,
            loadingMsg: '',
        }
    case TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST_FAIL:
        return {
            ...state,
            errorCode: action.payload.code,
            errorMsg: action.payload.message,
        }

    case TrainingActionTypes.GET_TRAINING_START_DATA:
    return {
        ...state,
        loading: true,
        loadingMsg: 'Retreiving training Data list ...'
    }
    case TrainingActionTypes.GET_TRAINING_START_DATA_SUCCESS:

        return {
            ...state,
            loading: false,
            loadingMsg: '',
            equipmentDetail : action.payload.equipmentDetail
        }
    case TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST_FAIL:
        return {
            ...state,
            errorCode: action.payload.code,
            errorMsg: action.payload.message,
        }



    default:
    return state;

  }
}
