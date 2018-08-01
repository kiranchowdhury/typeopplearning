import { ProfileContract } from './profile-contract';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { ProfileService } from "./profile.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from "rxjs/operators";
import { ProfileActionTypes, GetProfileAction,
  GetProfileSuccessAction, GetProfileFailedAction, GetProfileUpdateAction, GetProfileUpdateSuccessAction, GetProfileUpdateFailedAction } from './profile-reducer';


@Injectable()
export class ProfileEffects {
    constructor(
        private action$: Actions<Action>,
        private profileService: ProfileService,
        private router: Router,
    ) {}

    @Effect()
    getProfileDetails(): Observable<Action> {
      return this.action$.ofType(ProfileActionTypes.GET_PROFILE).pipe(
          switchMap((action: GetProfileAction) =>
              this.profileService.getProfileDetails(action.payload)
              .pipe(
                  map((resp: ProfileContract) => (resp.status === 1) ?
                  new GetProfileSuccessAction(resp)
                  : new GetProfileFailedAction({code:resp.code
                    , message: resp.message}))
              )
          )
      )
  }
  @Effect()
  getProfileDetailUpdate(): Observable<Action> {
    return this.action$.ofType(ProfileActionTypes.GET_PROFILE_UPDATE).pipe(
        switchMap((action: GetProfileUpdateAction) =>
            this.profileService.getProfileDetailUpdate(action.payload)
            .pipe(
                map((resp: ProfileContract) => (resp.status === 1) ?
                new GetProfileUpdateSuccessAction(resp)
                : new GetProfileUpdateFailedAction({code:resp.code
                  , message: resp.message}))
            )
        )
    )
  }
}
