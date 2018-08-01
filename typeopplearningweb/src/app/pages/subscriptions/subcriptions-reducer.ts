import { TrainingCatState } from './subscriptions-state';
import { TrainingCatContract, EquipmentTypeRes, EquipmentTypeContract, EquipmentTypeIdRequest,
    EquipmentDataContract, InvoiceContract, PurchaseTrainingRequestContract,
    PurchaseTrainingResponseContract, AllowedTrainingCategoryResponseContract,
    AllowedTrainingDetailRequest, AllowedTrainingDetailContract  } from './subscriptions-contract';
import { Action } from "@ngrx/store";
import { ErrorResponse } from "../../@core/error/error-response";
import { AppState } from "../../@models/app-state";
import { TrainingLibraryContract } from '../training-library/training-library-contract';

export enum TrainingCategoryActionTypes {
    GET_TRAINING_CATEGORY = 'Get Training Category',
    GET_TRAINING_CATEGORY_SUCCESS = 'Get Training Category Success',
    GET_TRAINING_CATEGORY_FAIL = 'Get Training Category Fail',

    GET_EQUIPMENT_TYPE_LIST = 'Get Equipment Type List',
    GET_EQUIPMENT_TYPE_LIST_SUCCESS = 'Get Equipment Type List Success',
    GET_EQUIPMENT_TYPE_LIST_FAIL = 'Get Equipment Type List Fail',

    GET_EQUIPMENT_TYPE_DATA_LIST = 'Get Equipment Type Data List',
    GET_EQUIPMENT_TYPE_DATA_LIST_SUCCESS = 'Get Equipment Type Data List Success',
    GET_EQUIPMENT_TYPE_DATA_LIST_FAIL = 'Get Equipment Type Data List Fail',

    GET_INVOICE_LIST = 'Get Invoice List',
    GET_INVOICE_LIST_SUCCESS = 'Get Invoice List Success',
    GET_INVOICE_LIST_FAIL = 'Get Invoice List Fail',

    PURCHASE_TRAINING = "Purchase Training",
    PURCHASE_TRAINING_SUCCESS = "Purchase Training Success",
    PURCHASE_TRAINING_FAILED = "Purchase Training Failed",

    //allowed Training action types

    GET_ALLOWED_TRAINING_CATEGORY = "Get Allowed Training Category",
    GET_ALLOWED_TRAINING_CATEGORY_SUCCESS = "Get Allowed Training Category Success",
    GET_ALLOWED_TRAINING_CATEGORY_FAILED = "Get Allowed Training Category Failed",

    GET_ALLOWED_TRAINING_DETAIL = "Get Allowed Training Detail",
    GET_ALLOWED_TRAINING_DETAIL_SUCCESS = "Get Allowed Training Detail Success",
    GET_ALLOWED_TRAINING_DETAIL_FAILED = "Get Allowed Training Detail Failed",

}

export class GetTrainingCategoryAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_TRAINING_CATEGORY;
    constructor() {}
}

export class GetTrainingCategorySuccessAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_TRAINING_CATEGORY_SUCCESS;
    constructor(public payload: TrainingLibraryContract) {}
}

export class GetTrainingCategoryFailAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_TRAINING_CATEGORY_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export class GetEquipmentTypeListAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST;
    constructor(public payload: EquipmentTypeRes) {}
  }

  export class GetEquipmentTypeListSuccessAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST_SUCCESS;
    constructor(public payload: EquipmentTypeContract) {}
  }

  export class GetEquipmentTypeListFailAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST_FAIL;
    constructor(public payload: ErrorResponse) {}
  }

  export class GetEquipmentTypeDataListAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST;
    constructor(public payload: EquipmentTypeIdRequest) {}
  }

  export class GetEquipmentTypeDataListSuccessAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST_SUCCESS;
    constructor(public payload: EquipmentDataContract) {}
  }

  export class GetEquipmentTypeDataListFailAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST_FAIL;
    constructor(public payload: ErrorResponse) {}
  }

  export class GetInvoiceListAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_INVOICE_LIST;
    constructor() {}
  }

  export class GetInvoiceListSuccessAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_INVOICE_LIST_SUCCESS;
    constructor(public payload: InvoiceContract) {}
  }

  export class GetInvoiceListFailAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_INVOICE_LIST_FAIL;
    constructor(public payload: ErrorResponse) {}
  }

  export class PurchaseTrainingAction implements Action {
    readonly type = TrainingCategoryActionTypes.PURCHASE_TRAINING;
    constructor(public payload: PurchaseTrainingRequestContract){}
  }

  export class PurchaseTrainingSuccessAction implements Action {
    readonly type = TrainingCategoryActionTypes.PURCHASE_TRAINING_SUCCESS;
    constructor(public payload: PurchaseTrainingResponseContract){}
  }

  export class PurchaseTrainingFailedAction implements Action {
    readonly type = TrainingCategoryActionTypes.PURCHASE_TRAINING_FAILED;
    constructor(public payload: ErrorResponse){}
  }

  //allowed training category action
  export class AllowedTrainingCategoryAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_CATEGORY;
    constructor(){}
  }

  export class AllowedTrainingCategorySuccessAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_CATEGORY_SUCCESS;
    constructor(public payload : AllowedTrainingCategoryResponseContract){}
  }

  export class AllowedTrainingCategoryFailedAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_CATEGORY_FAILED;
    constructor(public payload: ErrorResponse){}
  }

  export class AllowedTrainingDetailAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_DETAIL;
    constructor(public payload : AllowedTrainingDetailRequest){}
  }

  export class AllowedTrainingDetailSuccessAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_DETAIL_SUCCESS;
    constructor(public payload : AllowedTrainingDetailContract){}
  }

  export class AllowedTrainingDetailFailedAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_DETAIL_FAILED;
    constructor(public payload: ErrorResponse){}
  }


export type TrainingCatActions = GetTrainingCategoryAction |
                    GetTrainingCategorySuccessAction |
                    GetTrainingCategoryFailAction |
                    GetEquipmentTypeListAction |
                    GetEquipmentTypeListSuccessAction |
                    GetEquipmentTypeListFailAction |
                    GetEquipmentTypeDataListAction |
                    GetEquipmentTypeDataListSuccessAction |
                    GetEquipmentTypeDataListFailAction | GetInvoiceListAction |
                    GetInvoiceListSuccessAction | GetInvoiceListFailAction |
                    PurchaseTrainingAction | PurchaseTrainingSuccessAction |
                    PurchaseTrainingFailedAction | AllowedTrainingCategoryAction |
                    AllowedTrainingCategorySuccessAction | AllowedTrainingCategoryFailedAction |
                    AllowedTrainingDetailAction | AllowedTrainingDetailSuccessAction |
                    AllowedTrainingDetailFailedAction

export const initialTrainingCatState: TrainingCatState = {
    loading: false,
    loadingMsg: '',
    trainingCat: [],
    equipmentType : [],
    equipmentData : [],
    count: 0,
    currentPage: 1,

}

export const selectorTrainingCat = (state: AppState) => state.trainingCat.trainingCatState || initialTrainingCatState;

export function trainingCatReducer(
    state: TrainingCatState = initialTrainingCatState,
    action: TrainingCatActions
): TrainingCatState {
    switch (action.type) {
        case TrainingCategoryActionTypes.GET_TRAINING_CATEGORY:
            return {
                ...state,
                loading: true,
                loadingMsg: 'Retreiving training libraries...'
            }
        case TrainingCategoryActionTypes.GET_TRAINING_CATEGORY_SUCCESS:
            return {
                ...state,
                trainingDetailsList: action.payload.trainingDetailsList,
                count: action.payload.trainingDetailsList.length,
                loading: false,
                loadingMsg: '',
            }
        case TrainingCategoryActionTypes.GET_TRAINING_CATEGORY_FAIL:
            return {
                ...state,
                errorCode: action.payload.code,
                errorMsg: action.payload.message,
            }


    case TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST:
    //console.log('=========11==on retreiving====');
        return {
            ...state,
            loading: true,
            loadingMsg: 'Retreiving equipment types...'
        }
    case TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST_SUCCESS:
      return {
            ...state,
            equipmentType: action.payload.equipmentType,
            count: action.payload.equipmentType.length,
            loading: false,
            loadingMsg: '',
        }
    case TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST_FAIL:
        return {
            ...state,
            errorCode: action.payload.code,
            errorMsg: action.payload.message,
        }

    //Get Equipment Data list on Equipment Type Id
    case TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST:
        return {
            ...state,
            loading: true,
            loadingMsg: 'Retreiving equipment Data list types...'
        }
    case TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST_SUCCESS:

        return {
            ...state,
            equipmentData: action.payload.equipmentData,
            count: action.payload.equipmentData.length,
            loading: false,
            loadingMsg: '',
        }
    case TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST_FAIL:
        return {
            ...state,
            errorCode: action.payload.code,
            errorMsg: action.payload.message,
        }
    case TrainingCategoryActionTypes.GET_INVOICE_LIST:
    return {
        ...state,
        loading: true,
        loadingMsg: 'Retreiving training libraries...'
    }
    case TrainingCategoryActionTypes.GET_INVOICE_LIST_SUCCESS:
    console.log('=================on success=====');
        return {
            ...state,
            invoiceList: action.payload.invoiceList,
            count: action.payload.invoiceList.length,
            loading: false,
            loadingMsg: '',
        }
    case TrainingCategoryActionTypes.GET_INVOICE_LIST_FAIL:
        return {
            ...state,
            errorCode: action.payload.code,
            errorMsg: action.payload.message,
        }
    case TrainingCategoryActionTypes.PURCHASE_TRAINING:
    return {
      ...state,
      loading: true,
      loadingMsg: 'Purchasing Training',
    }
    case TrainingCategoryActionTypes.PURCHASE_TRAINING_SUCCESS:
    return {
      ...state,
      loading: false,
      loadingMsg: action.payload.message,
    }
    case TrainingCategoryActionTypes.PURCHASE_TRAINING_FAILED:
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      errorCode: action.payload.code,
      errorMsg: action.payload.message
    }

    //allowed training category cases in reducer function

    case TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_CATEGORY:
    return {
      ...state,
      loading: true,
      loadingMsg: 'Get Allowed Training Categories.',
    }
    case TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_CATEGORY_SUCCESS:

    return {
      ...state,
      loading: false,
      loadingMsg: action.payload.message,
      allowedEquipmentCategories : action.payload.equipmentCategories
    }
    case TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_CATEGORY_FAILED:
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      errorCode: action.payload.code,
      errorMsg: action.payload.message
    }

    case TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_DETAIL:
    return {
      ...state,
      loading: true,
      loadingMsg: 'Get Allowed Training Details',
    }
    case TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_DETAIL_SUCCESS:

    return {
      ...state,
      loading: false,
      loadingMsg: action.payload.message,
      equipmentDetails : action.payload.equipmentDetails
    }
    case TrainingCategoryActionTypes.GET_ALLOWED_TRAINING_DETAIL_FAILED:
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      errorCode: action.payload.code,
      errorMsg: action.payload.message
    }

        default:
            return state;
    }

}
