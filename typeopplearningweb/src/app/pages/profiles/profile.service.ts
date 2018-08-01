import { ProfileContract, ProfileReqContract, ProfileUpdateReq } from './profile-contract';
import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apiConnectore: ApiConnectorService) { }

  getProfileDetails(payload: ProfileReqContract): Observable<ProfileContract> {
    console.log('==in service======');
    console.log(payload);
    return this.apiConnectore.get('/api/profile/details', payload).pipe(
      map((resp: ProfileContract) => resp)
    )
  }

  getProfileDetailUpdate(payload: ProfileUpdateReq): Observable<ProfileContract> {
    // console.log('==in service=update');
   // console.log(payload);
    return this.apiConnectore.post('/api/profile/details/update', payload).pipe(
      map((resp: ProfileContract) => resp)
    )
  }
}
