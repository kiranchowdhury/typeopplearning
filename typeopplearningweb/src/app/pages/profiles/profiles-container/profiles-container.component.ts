import { Component, OnInit, Input } from '@angular/core';
import { LoginState } from './../../../@core/login/login.state';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { selectorLogin } from './../../../@core/login/login.reducer';
import { ProfileState, Profile } from '../profile-state';
import { GetProfileAction, selectorProfile, GetProfileUpdateAction } from '../profile-reducer';

@Component({
  selector: 'tl-profiles-container',
  templateUrl: './profiles-container.component.html',
  styleUrls: ['./profiles-container.component.scss']
})
export class ProfilesContainerComponent implements OnInit {

  currentUser: LoginState;
  profileDetail: Profile;
  customer: {email: string};

  constructor(   private store: Store<AppState>) { }

  ngOnInit() {
      this.store.select(selectorLogin).subscribe(
        (loginState: LoginState) => {
          this.currentUser = loginState;
          console.log('role: ',this.currentUser.role);
          //console.log('===============in 1=============='+loginState);
        }
      )

      this.customer = {
        email: this.currentUser.email
      }
      console.log(this.customer);
      this.store.dispatch( new GetProfileAction(this.customer) );

      this.store.select(selectorProfile).subscribe(
        (profileState: ProfileState) => {
          this.profileDetail = profileState.profileDetails;
          console.log("Profiles", profileState);
        }
      )
  }

  saveProfileDetail(profile){
    //console.log(this.profileDetail);
    //console.log(this.profileDetail);
    this.store.dispatch( new GetProfileUpdateAction(profile) );
  }

}
