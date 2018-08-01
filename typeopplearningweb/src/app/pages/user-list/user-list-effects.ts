import { UserListContract, CreateUserResponse, RemoveUserResponse,
  UserDetailContract , UserTrainingContract, UpdatedUserTrainingContract} from './user-list-contract';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { UserListService } from "./user-list.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from "rxjs/operators";
import { UserListActionTypes, GetUserListAction, GetUserListActionSuccess, GetUserListActionFailed,
   CreateUserAction, CreateUserFailedAction, CreateUserSuccessAction, RemoveUserAction,
   RemoveUserSuccessAction, RemoveUserFailedAction, GetUserDetailAction,
   GetUserDetailSuccessAction, GetUserDetailFailAction, GetTrainingStatusAction, GetTrainingStatusSuccessAction, GetTrainingStatusFailAction, SaveUserListAction, SaveUserListSuccessAction, SaveUserListFailedAction, UpdateUserTrainingAction, UpdateUserTrainingSuccessAction, UpdateUserTrainingFailedAction } from './user-list-reducer';
import { RouterEvent } from '@angular/router/src/events';

@Injectable()
export class UserListEffects {
  constructor (
    private $action: Actions<Action>,
    private userListService: UserListService,
    private router: Router
  ) {}

  @Effect()
  getUserList(): Observable<Action> {
    return this.$action.ofType(UserListActionTypes.GET_USER_LIST).pipe(
      switchMap((action: GetUserListAction) =>
    this.userListService.getUserList()
      .pipe(
        map((res: UserListContract) =>
      (res.status === 1) ? new GetUserListActionSuccess(res) : new GetUserListActionFailed({
        code: res.code, message: res.message
      }))
      )
  )
    )
  }

  @Effect()
  createUser(): Observable<Action> {
    return this.$action.ofType(UserListActionTypes.CREATE_USER).pipe(
        switchMap((action: CreateUserAction) =>
        this.userListService.createUser(action.payload)
        .pipe(
            map((resp: CreateUserResponse) => (resp.status === 1)?
            new CreateUserSuccessAction(resp)
            : new CreateUserFailedAction({code: resp.code, message: resp.message}))
        ))
      )
    }

    @Effect()
    removeUser(): Observable<Action> {
      return this.$action.ofType(UserListActionTypes.REMOVE_USER).pipe(
        switchMap((action: RemoveUserAction) =>
      this.userListService.removeUser(action.payload).pipe(
        map((response: RemoveUserResponse) => (response.status === 1)? (new RemoveUserSuccessAction(response), new GetUserListAction())
      : new RemoveUserFailedAction({code: response.code, message: response.message}))
      ))
      )
    }

    @Effect()
    getUserDetail(): Observable<Action> {
      return this.$action.ofType(UserListActionTypes.GET_USER_DETAIL).pipe(
        switchMap((action: GetUserDetailAction) =>
      this.userListService.getUserDetail(action.payload).pipe(
        map((response: UserDetailContract) => (response.status === 1)? new GetUserDetailSuccessAction(response)
      : new GetUserDetailFailAction({code: response.code, message: response.message}))
      ))
      )
    }

    @Effect()
    getUserTraining(): Observable<Action> {
      console.log('==========get training status===effects==');
      return this.$action.ofType(UserListActionTypes.GET_TRAINING_STATUS).pipe(
        switchMap((action: GetTrainingStatusAction) =>
      this.userListService.getUserTrainingStatus(action.payload).pipe(
        map((response: UserTrainingContract) => (response.status === 1)?
        new GetTrainingStatusSuccessAction(response)
      : new GetTrainingStatusFailAction({code: response.code, message: response.message}))
      ))
      )
    }

    @Effect()
    saveUserList(): Observable<Action> {
      return this.$action.ofType(UserListActionTypes.SAVE_USERS).pipe(
        switchMap((action: SaveUserListAction) => this.userListService.saveUserList(action.payload).pipe(
          map ((resp: UserListContract) => (resp.status === 1)? new SaveUserListSuccessAction(resp):
        new SaveUserListFailedAction({code: resp.code, message: resp.message}))
        ))
      )
    }

    @Effect()
    updateUserTraining(): Observable<Action> {
      return this.$action.ofType(UserListActionTypes.UPDATE_USER_TRAINING).pipe(
        switchMap((action: UpdateUserTrainingAction) => this.userListService.updateTrainingDetail(action.payload).pipe(
          map ((resp: UpdatedUserTrainingContract) => (resp.status === 1)? new UpdateUserTrainingSuccessAction(resp):
        new UpdateUserTrainingFailedAction({code: resp.code, message: resp.message}))
        ))
      )
    }
}
