import { ProfileState } from './profile-state';
import { ProfileContract, ProfileReqContract,  ProfileUpdateReq } from './profile-contract';
import { Action } from "@ngrx/store";
import { ErrorResponse } from "../../@core/error/error-response";
import { AppState } from "../../@models/app-state";

export enum ProfileActionTypes {
  GET_PROFILE = "Get profile",
  GET_PROFILE_SUCCESS = "Get Profile Success",
  GET_PROFILE_FAILED = "Get Profile Failed",
  GET_PROFILE_UPDATE = "Profile Update",
  GET_PROFILE_UPDATE_SUCCESS = "Profile Update Success",
  GET_PROFILE_UPDATE_FAIL = "Profile Update Fail",
}

export class GetProfileAction implements Action {
  readonly type = ProfileActionTypes.GET_PROFILE;
  constructor (public payload: ProfileReqContract){}
}

export class GetProfileSuccessAction implements Action {
  readonly type = ProfileActionTypes.GET_PROFILE_SUCCESS;
  constructor (public payload: ProfileContract){}
}

export class GetProfileFailedAction implements Action {
  readonly type = ProfileActionTypes.GET_PROFILE_FAILED;
  constructor (public payload: ErrorResponse){}
}

export class GetProfileUpdateAction implements Action {
  readonly type = ProfileActionTypes.GET_PROFILE_UPDATE;
  constructor (public payload: ProfileUpdateReq){}
}

export class GetProfileUpdateSuccessAction implements Action {
  readonly type = ProfileActionTypes.GET_PROFILE_UPDATE_SUCCESS;
  constructor (public payload: ProfileContract){}
}

export class GetProfileUpdateFailedAction implements Action {
  readonly type = ProfileActionTypes.GET_PROFILE_UPDATE_FAIL;
  constructor (public payload: ErrorResponse){}
}


export type ProfileActions = GetProfileAction | GetProfileSuccessAction | GetProfileFailedAction |
                      GetProfileUpdateAction | GetProfileUpdateSuccessAction |
                      GetProfileUpdateFailedAction

export const initialProfileState: ProfileState = {
  errorCode: '',
  errorMsg: '',
  loading: true,
  loadingMsg: 'Loading Profile Details'
  // ,
  // profileDetails: {
  //   id: 1231,
  //   fullName: 'Kiran Chowdhary',
  //   profileImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJqWtCdNAfCdf3FhiqZ6ebvFw1bfCLYSTvIKwWDn0Yea58VnK',
  //   email: 'kiran.soft@gmail.com',
  //   phone: '77173267239',
  //   address: 'G-145, Damlur',
  //   specialCredits: 'XYZ'
  // }

}


export const selectorProfile = (state: AppState) => state.profile.profileState || initialProfileState;

export function profileReducer (
  state: ProfileState = initialProfileState,
  action: ProfileActions
): ProfileState {
  switch (action.type) {
      case ProfileActionTypes.GET_PROFILE:
      return {
        ...state,
        loading: true,
        loadingMsg: "Loading Profile"
      }

      case ProfileActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingMsg: '',
        profileDetails: {
          _id : action.payload.customerDetail._id,
          name : action.payload.customerDetail.name,
          address : action.payload.customerDetail.address,
          phone : action.payload.customerDetail.phone,
          email : action.payload.customerDetail.email,
          specialCredits : action.payload.customerDetail.specialCredits,
          url : action.payload.customerDetail.url
        }
      }

      case ProfileActionTypes.GET_PROFILE_FAILED:
      return {
        ...state,
        errorCode: action.payload.code,
        errorMsg: action.payload.message,

      }

      case ProfileActionTypes.GET_PROFILE_UPDATE:
      return {
        ...state,
        loading: true,
        loadingMsg: "Updating Profile Detail"
      }

      case ProfileActionTypes.GET_PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingMsg: '',
        profileDetails: {
          _id : action.payload.customerDetail._id,
          name : action.payload.customerDetail.name,
          address : action.payload.customerDetail.address,
          phone : action.payload.customerDetail.phone,
          email : action.payload.customerDetail.email,
          specialCredits : action.payload.customerDetail.specialCredits,
          url : action.payload.customerDetail.url
        }
      }

      case ProfileActionTypes.GET_PROFILE_UPDATE_FAIL:
      return {
        ...state,
        errorCode: action.payload.code,
        errorMsg: action.payload.message,

      }

    default:
      return state;
  }
}
