import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../api-handlers/api-connector.service';
import { PasswordResetRequest, PasswordResetResponse } from './reset-password-contract';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class PasswordResetService {

  constructor(private apiConnector: ApiConnectorService) { }

  reset(payload: PasswordResetRequest): Observable<PasswordResetResponse> {
    console.log('Login payload ', payload);
    return this.apiConnector.post('/api/reset/password/debut', payload)
      .pipe(
        map((data: PasswordResetResponse) => data)
      )
  }

}
