import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../@models/app-state';
import { selectorLogin } from '../login/login.reducer';
import { LoginState } from '../login/login.state';

@Injectable()
export class LoginGuard implements CanActivate {
  loggedin: boolean;
  constructor(private store: Store<AppState>,
              private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.store.select(selectorLogin).subscribe(
        (loginState: LoginState) => {
          this.loggedin = loginState.authenticated;
          console.log('====loggedin=====', this.loggedin);
          if(!this.loggedin) {
            this.router.navigate(['/pages/welcome']);
          }
        }
      )
    return this.loggedin;
  }
}
