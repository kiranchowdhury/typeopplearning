import { UserListContract, CreateUser, CreateUserResponse, RemoveUser, RemoveUserResponse ,
    UserDetailReq, UserDetailContract, UserTrainingReq, UserTrainingContract,
    SaveUserContractRequest, UpdatedUserTrainingContract, UpdateUserTrainingReq} from './user-list-contract';
import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private apiConnector: ApiConnectorService) { }

  getUserList(): Observable<UserListContract> {
    return this.apiConnector.get('/api/employee/getall', {}).pipe(
      map((resp: UserListContract) => resp)
    )
  }

  createUser(payload: CreateUser): Observable<CreateUserResponse> {
    return this.apiConnector.post('/api/user/create', payload).pipe(
      map((response: CreateUserResponse) => response)
    )
  }

  removeUser(payload: RemoveUser): Observable<RemoveUserResponse> {
    return this.apiConnector.post('/api/user/remove', payload).pipe(
      map((result: RemoveUserResponse) => result)
    )
  }

  getUserDetail(payload: UserDetailReq): Observable<UserDetailContract> {
    //console.log(payload);
    return this.apiConnector.post('/api/user/detail', payload).pipe(
      map((result: UserDetailContract) => result)
    )
  }

  getUserTrainingStatus(payload: UserTrainingReq): Observable<UserTrainingContract> {
    //console.log(payload);
    return this.apiConnector.post('/api/user/training', payload).pipe(
      map((result: UserTrainingContract) => result)
    )
  }

  saveUserList (payload: SaveUserContractRequest): Observable<UserListContract> {
    return this.apiConnector.post('/api/user/update', payload).pipe(
      map((resp: UserListContract) => resp)
    )
  }

  updateTrainingDetail (payload: UpdateUserTrainingReq): Observable<UpdatedUserTrainingContract> {
    return this.apiConnector.post('/api/update/user/training', payload).pipe(
      map((resp: UpdatedUserTrainingContract) => resp)
    )
  }

}
