import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../api-handlers/api-connector.service';
import { SignupRequest, SignupResponse, PasswordRequest } from './signup.contract';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private apiConnector: ApiConnectorService) { }

    signup(payload: SignupRequest): Observable<SignupResponse> {
      console.log('signup payload service', payload);
      return this.apiConnector.post('/api/account/signup', payload)
        .pipe(
          map((data: SignupResponse) => data)
        )
    }

    passwordVerify(payload: PasswordRequest): Observable<SignupResponse> {
      console.log('signup payload password', payload);
      return this.apiConnector.post('/api/account/resetpassword', payload)
        .pipe(
          map((data: SignupResponse) => data)
        )
    }

}
