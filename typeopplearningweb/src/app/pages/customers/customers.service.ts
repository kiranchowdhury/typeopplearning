import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { GetCustomersResponse, CreateCustomerResponse, CreateCustomerRequest,
  GetCustomerDetailReq, CustomerBudgetReq, CustomerBudgetDetailContract,
  CustomerUsersReq, CustomerUserListContract, DetailUpdateReq, GetCustomerDetailsResponse,
  DetailsUpdateResp, CustomerListUpdateReq, CustomerListUpdateResp} from './customer-contracts';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private apiConnector: ApiConnectorService) { }

  getCustomers(): Observable<GetCustomersResponse> {
    return this.apiConnector.get('/api/customers/getall', {}).pipe(
      map((resp: GetCustomersResponse) => resp)
    )
  }

  createCustomer(payload: CreateCustomerRequest): Observable<CreateCustomerResponse> {
    console.log(payload);
    return this.apiConnector.post('/api/customers/create', payload).pipe(
      map((resp: CreateCustomerResponse) => resp)
    )
  }

  removeCustomer(payload: CreateCustomerRequest): Observable<CreateCustomerResponse> {
    console.log('=======into remove service=========='+payload.customer);
    return this.apiConnector.post('/api/customers/delete', payload).pipe(
      map((resp: CreateCustomerResponse) => resp)
    )
  }

  getCustomerDetail(payload: GetCustomerDetailReq): Observable<GetCustomerDetailsResponse> {
    return this.apiConnector.get('/api/customers/detail', payload).pipe(
      map((resp: GetCustomerDetailsResponse) => resp)
    )
  }

  getCustomerBudgetDetail(payload: CustomerBudgetReq): Observable<CustomerBudgetDetailContract> {
    /* console.log('======in service====customer====');
    console.log(payload); */
    return this.apiConnector.get('/api/customers/budget/detail', payload).pipe(
      map((resp: CustomerBudgetDetailContract) => resp)
    )
  }

  getCustomerUserList(payload: CustomerUsersReq): Observable<CustomerUserListContract> {
    return this.apiConnector.get('/api/user/getall', payload).pipe(
      map((resp: CustomerUserListContract) => resp)
    )
  }

  updateCustomerDetail(payload: DetailUpdateReq): Observable<DetailsUpdateResp> {
    return this.apiConnector.post('/api/customers/savecustomer', payload).pipe(
      map((resp: DetailsUpdateResp) => resp)
    )
  }

  updateCustomerListDetail(payload: CustomerListUpdateReq): Observable<CustomerListUpdateResp> {
    console.log('========into update customer list====');
    return this.apiConnector.post('/api/save/customers/list', payload).pipe(
      map((resp: CustomerListUpdateResp) => resp)
    )
  }
}
