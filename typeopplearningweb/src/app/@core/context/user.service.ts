import { LoginState } from './../login/login.state';
import { CurrentUser } from './user.model';
import { Injectable } from '@angular/core';
import { AppState } from '../../@models/app-state';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthState } from '../auth/auth.state';
import { distinctUntilChanged } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class UserService {
  public currentUserSubject = new BehaviorSubject<CurrentUser>({} as CurrentUser);
  // public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  private currentUser: CurrentUser = {
    authenticted: false,
    name: '',
    role: '',
    email: ''
  }

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();


  constructor(private store: Store<AppState>) { }

  // load the user context from store

  loadUserContext() {
      let currentUser: CurrentUser = {} as CurrentUser;
      this.store.select((state: AppState) => state.login )
        .subscribe((loginState: LoginState) => {
          currentUser.authenticted = true;
          currentUser.email = loginState.email;
          currentUser.name  = loginState.name;
          currentUser.role = loginState.role;
            this.currentUserSubject.next(currentUser);
        })
  }



  // must be called when log out
  public purgeCurrentContext() {
    this.currentUserSubject.next({} as CurrentUser);
  }



  getCurrentUser(): CurrentUser {
    this.currentUserSubject.subscribe(
      (user: CurrentUser) => {
        this.currentUser = user;
      }
    )
    return this.currentUser;
  }

}
