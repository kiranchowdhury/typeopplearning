import { Customer, RemainingBudget, BudgetDetail,
    CustomerUserList} from "./customers-state";

export interface CustomerContracts {


}

/** Get Customers Contract */
export interface GetCustomersRequest {

}
export interface GetCustomersResponse {
    status: number;
    code: string;
    message: string;
    count: number;
    customers: Customer[];
}

export interface CreateCustomerRequest {
    customer: Customer
}

export interface CreateCustomerResponse {
    status: number;
    code: string;
    message: string;
    customer: Customer;
}

export interface GetCustomerDetailReq{
    _id : string;
    name: string;
}

export interface GetCustomerDetailsResponse {
  status: number;
  code: string;
  message: string;
  selectedCustomer: Customer;
}

// export interface CustomerDetailContract{
//     status: number;
//     code: string;
//     message: string;
//     customerDetail: CustomerDetail;
// }

export interface CustomerBudgetReq{
    customerName : string;
}

export interface CustomerBudgetDetailContract {
    status: number;
    code: string;
    message: string;
    remainingBudget : RemainingBudget;
    budgetDetail : BudgetDetail[];
}

export interface CustomerUsersReq{
    customerName : string;
}

export interface CustomerUserListContract {
    status: number;
    code: string;
    message: string;
    userList : CustomerUserList[];
    count : number;
}

export interface DetailUpdateReq{
    updatedCustomer : Customer;
}

export interface DetailsUpdateResp {
  status: number;
  code: string;
  message: string;
  updatedCustomer: Customer;
}

export interface CustomerListUpdateReq{
  updatedCustomers : Customer[];
}

export interface CustomerListUpdateResp {
  status: number;
  code: string;
  message: string;
  updatedCustomers: Customer[];
}
