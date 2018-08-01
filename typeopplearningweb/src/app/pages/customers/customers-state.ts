export interface CustomersState {
    code?: string;
    message?: string;
    isError?: boolean;
    loading?: boolean;
    loadingMsg?: string;
    customers?: Customer[];
    count: number;
    currentPage: number;
    customerDetail ?: Customer;
    remainingBudget ?: RemainingBudget;
    budgetDetail ?: BudgetDetail[];
    customerUserList ?: CustomerUserList[];
}

export interface Customer {
    _id: string;
    name: string;
    contactName: string;
    noOfUsers: number;
    email: string;
    phone: string;
    address: string;
    remainingBudget?: number;
    payments?: Payment[];
    url: string;
}

export interface Payment {
    transactionId: string;
    description: string;
    type: {code: string, name: string};
    date: Date;
    amount: number;

}

// export interface CustomerDetail {
//     customerName: string;
//     contactName: string;
//     email : string;
//     phone: string;
//     address: string;
//     users: string;
//     remainingBudget: string;
// }

export interface RemainingBudget{
    remainingBudget : string;
}

export interface BudgetDetail {
    transactionId : string;
    description : string;
    type : string;
    date : Date;
    amount : string
}

export interface CustomerUserList {
    fullName: string;
    noOfTrainings: number;
    status: string;
    userId: string;
    url: string;
  }
