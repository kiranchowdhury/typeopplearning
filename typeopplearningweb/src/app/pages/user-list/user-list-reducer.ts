import { Action } from "@ngrx/store";
import { UserListContract, CreateUser, CreateUserResponse, RemoveUser, RemoveUserResponse ,
    UserDetailReq, UserDetailContract, UserTrainingReq, UserTrainingContract, SaveUserContractRequest,
    UpdateUserTrainingReq, UpdatedUserTrainingContract} from "./user-list-contract"
import { ErrorResponse } from "../../@core/error/error-response";
import { UserListState, User } from "./user-list-state";
import { AppState } from "../../@models/app-state";

export enum UserListActionTypes {
  GET_USER_LIST = "Get User List",
  GET_USER_LIST_SUCCESS = "Get User List Success",
  GET_USER_LIST_FAILED = "Get User List Failed",

  CREATE_USER = "Create User",
  CREATE_USER_SUCCESS = "Create User Success",
  CREATE_USER_FAILED = "Create User Failed",

  REMOVE_USER = "Remove User",
  REMOVE_USER_SUCCESS = "Remove User Success",
  REMOVE_USER_FAILED = "Remove User Failed",

  GET_USER_DETAIL = "Get User Detail",
  GET_USER_DETAIL_SUCCESS = "Get User Detail Success",
  GET_USER_DETAIL_FAIL = "Get User Detail Fail",

  GET_TRAINING_STATUS = "Get User Training Status",
  GET_TRAINING_STATUS_SUCCESS = "Get User Training Status Success",
  GET_TRAINING_STATUS_FAIL = "Get User Training Status Fail",

  SAVE_USERS = "Save employee",
  SAVE_USERS_SUCCESS = "Save employee success",
  SAVE_USERS_FAILED = "Save employee failed",

  UPDATE_USER_TRAINING = "Update Employee Training",
  UPDATE_USER_TRAINING_SUCCESS = "Update Employee Training Success",
  UPDATE_USER_TRAINING_FAILED = "Update Employee Training Failed"
}

export class GetUserListAction implements Action {
  readonly type = UserListActionTypes.GET_USER_LIST;
  constructor () {}
}

export class GetUserListActionSuccess implements Action {
  readonly type = UserListActionTypes.GET_USER_LIST_SUCCESS;
  constructor (public payload: UserListContract) {}
}

export class GetUserListActionFailed implements Action {
  readonly type = UserListActionTypes.GET_USER_LIST_FAILED;
  constructor (public payload: ErrorResponse) {}
}

export class CreateUserAction implements Action {
  readonly type = UserListActionTypes.CREATE_USER;
  constructor (public payload: CreateUser) {};
}

export class CreateUserSuccessAction implements Action {
  readonly type = UserListActionTypes.CREATE_USER_SUCCESS;
  constructor (public payload: CreateUserResponse) {};
}

export class CreateUserFailedAction implements Action {
  readonly type = UserListActionTypes.CREATE_USER_FAILED;
  constructor (public payload: ErrorResponse) {};
}

export class RemoveUserAction implements Action {
  readonly type = UserListActionTypes.REMOVE_USER;
  constructor (public payload: RemoveUser) {}
}

export class RemoveUserSuccessAction implements Action {
  readonly type = UserListActionTypes.REMOVE_USER_SUCCESS;
  constructor (public payload: RemoveUserResponse) {}
}

export class RemoveUserFailedAction implements Action {
  readonly type = UserListActionTypes.REMOVE_USER_FAILED;
  constructor (public payload: ErrorResponse) {}
}

export class GetUserDetailAction implements Action {
  readonly type = UserListActionTypes.GET_USER_DETAIL;
  constructor (public payload: UserDetailReq) {}
}

export class GetUserDetailSuccessAction implements Action {
  readonly type = UserListActionTypes.GET_USER_DETAIL_SUCCESS;
  constructor (public payload: UserDetailContract) {}
}

export class GetUserDetailFailAction implements Action {
  readonly type = UserListActionTypes.GET_USER_DETAIL_FAIL;
  constructor (public payload: ErrorResponse) {}
}

export class GetTrainingStatusAction implements Action {
  readonly type = UserListActionTypes.GET_TRAINING_STATUS;
  constructor (public payload: UserTrainingReq) {}
}

export class GetTrainingStatusSuccessAction implements Action {
  readonly type = UserListActionTypes.GET_TRAINING_STATUS_SUCCESS;
  constructor (public payload: UserTrainingContract) {}
}

export class GetTrainingStatusFailAction implements Action {
  readonly type = UserListActionTypes.GET_TRAINING_STATUS_FAIL;
  constructor (public payload: ErrorResponse) {}
}

export class SaveUserListAction implements Action {
  readonly type = UserListActionTypes.SAVE_USERS;
  constructor (public payload: SaveUserContractRequest){}
}

export class SaveUserListSuccessAction implements Action {
  readonly type = UserListActionTypes.SAVE_USERS_SUCCESS;
  constructor (public payload: UserListContract){}
}

export class SaveUserListFailedAction implements Action {
  readonly type = UserListActionTypes.SAVE_USERS_FAILED;
  constructor (public payload: ErrorResponse) {}
}

export class UpdateUserTrainingAction implements Action {
  readonly type = UserListActionTypes.UPDATE_USER_TRAINING;
  constructor (public payload: UpdateUserTrainingReq){}
}

export class UpdateUserTrainingSuccessAction implements Action {
  readonly type = UserListActionTypes.UPDATE_USER_TRAINING_SUCCESS;
  constructor (public payload: UpdatedUserTrainingContract){}
}

export class UpdateUserTrainingFailedAction implements Action {
  readonly type = UserListActionTypes.UPDATE_USER_TRAINING_FAILED;
  constructor (public payload: ErrorResponse) {}
}


export type UserListActions = GetUserListAction |
                              GetUserListActionSuccess |
                              GetUserListActionFailed |
                              CreateUserAction |
                              CreateUserSuccessAction |
                              CreateUserFailedAction |
                              RemoveUserAction |
                              RemoveUserSuccessAction |
                              RemoveUserFailedAction |
                              GetUserDetailAction |
                              GetUserDetailSuccessAction | GetUserDetailFailAction |
                              GetTrainingStatusAction |
                              GetTrainingStatusSuccessAction | GetTrainingStatusFailAction |
                              SaveUserListAction | SaveUserListSuccessAction |
                              SaveUserListFailedAction | UpdateUserTrainingAction |
                              UpdateUserTrainingSuccessAction | UpdateUserTrainingFailedAction

export const initialUserListState: UserListState = {
  errorCode: '',
  errorMsg: '',
  loading: true,
  loadingMsg: 'Loading User List',
  count: 0,
  currentPage: 1
}

export const selectorUserList = (state: AppState) => state.userList.userListState || initialUserListState;

export function userListReducer (
  state: UserListState = initialUserListState,
  action: UserListActions
): UserListState {
  switch (action.type) {
    case UserListActionTypes.GET_USER_LIST :
    return {
      ...state,
      loading: true,
      loadingMsg: 'Loading User List',
      // saved: false
    }
    case UserListActionTypes.GET_USER_LIST_SUCCESS :
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      userList: action.payload.userList,
      count: action.payload.count
    }
    case UserListActionTypes.GET_USER_LIST_FAILED :
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      errorMsg: action.payload.message,
      errorCode: action.payload.code
    }
    case UserListActionTypes.CREATE_USER :
    return {
      ...state,
      loading: true,
      loadingMsg: 'Creating User'
    }
    case UserListActionTypes.CREATE_USER_SUCCESS :
    console.log('======userlist action success======');
    console.log(action.payload);
    return{
      ...state,
      loading: false,
      // userList: patchItems(state.userList, action.payload.user),
      count: state.count+1,
      loadingMsg: 'User Created Successfully',
      userList: action.payload.userList
    }
    case UserListActionTypes.CREATE_USER_FAILED :
    return {
      ...state,
      errorCode: action.payload.code,
      loading: false,
      loadingMsg: action.payload.message
    }
    case UserListActionTypes.REMOVE_USER :
    console.log('---remove-user---action');
    return {
      ...state,
      loading: true,
      loadingMsg: 'Removing User'
    }
    case UserListActionTypes.REMOVE_USER_SUCCESS :
    // console.log('---remove-user---success action', action.payload.user);
    return {
      ...state,
      loading: false,
      loadingMsg: 'User Removed Successfully'
    }
    case UserListActionTypes.REMOVE_USER_FAILED :
    console.log('---remove-user---failed action');
    return {
      ...state,
      loading: false,
      errorCode: action.payload.code,
      errorMsg: action.payload.message
    }

    case UserListActionTypes.GET_USER_DETAIL :
     return {
      ...state,
      loading: true,
      loadingMsg: 'Get User Detail'
    }
    case UserListActionTypes.GET_USER_DETAIL_SUCCESS :
    console.log('success--------------user detail', action.payload.userDetail);
    return {
      ...state,
      loading: false,
      loadingMsg: 'User Detail Successfully received...',
      userDetail: action.payload.userDetail
    }
    case UserListActionTypes.GET_USER_DETAIL_FAIL :
    return {
      ...state,
      loading: false,
      errorCode: action.payload.code,
      errorMsg: action.payload.message
    }
    case UserListActionTypes.GET_TRAINING_STATUS :
    console.log('==========get training reducer=====')
     return {
      ...state,
      loading: true,
      loadingMsg: 'Get User Detail'
    }
    case UserListActionTypes.GET_TRAINING_STATUS_SUCCESS :
    //console.log('=============on success============');
    //console.log(action.payload);
    return {
      ...state,
      loading: false,
      loadingMsg: 'User Training Detail Successfully received...',
      userTrainings: action.payload.userTrainings
    }
    case UserListActionTypes.GET_TRAINING_STATUS_FAIL :
    return {
      ...state,
      loading: false,
      errorCode: action.payload.code,
      errorMsg: action.payload.message
    }
    case UserListActionTypes.SAVE_USERS :
    return {
      ...state,
      loading: true,
      loadingMsg: 'Saving Users Details.',
      saved: false
    }
    case UserListActionTypes.SAVE_USERS_SUCCESS :
    console.log('======userlist SAVE_USERS_SUCCESS======');
    return {
      ...state,
      loading: false,
      loadingMsg: action.payload.message,
      saved: true,
    }
    case UserListActionTypes.SAVE_USERS_FAILED :
    console.log('======userlist SAVE_USERS_FAILED======');
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      errorCode: action.payload.code,
      errorMsg: action.payload.message,
      saved: false
    }

    case UserListActionTypes.UPDATE_USER_TRAINING :
    return {
      ...state,
      loading: true,
      loadingMsg: 'Updating User Training'

    }
    case UserListActionTypes.UPDATE_USER_TRAINING_SUCCESS :
    console.log('in reducer');
    console.log(action.payload.updatedUserTraining);
    return {
      ...state,
      loading: false,
      loadingMsg: action.payload.message,
      updateUserTraining : action.payload.updatedUserTraining,
    }
    case UserListActionTypes.UPDATE_USER_TRAINING_FAILED :
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      errorCode: action.payload.code,
      errorMsg: action.payload.message
    }
    default :
    return state;

  }
}


function patchItems(items: any[], item: any): any[] {
  items.push(item);
  return items;
}
