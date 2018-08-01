import { Customer } from "../customers/customers-state";

export interface UserListState {
  errorCode?: string;
  errorMsg?: string;
  loading?: boolean;
  loadingMsg?: string;
  userList?: User[];
  count: number;
  currentPage: number;
  userDetail ?: User;
  userTrainings?: EmployeeTraining[];
  updateUserTraining?:EmployeeTraining;
  saved?: boolean;
}

export interface User {
  _id: string;
  fullname: string;
  email: string;
  address: string;
  user?: UserDetailData;
  customer?: Customer;
  employeetrainings?: EmployeeTraining[];
}

export interface UserTrainingStatus {
  _id: string;
  trainingName : string;
  staus : string;
}

export interface UserDetailData {
  _id: string;
  fullname : string;
  email : string;
  address : string;
}

export interface EmployeeTraining {
  _id: string;
  employee: User;
  trainingdetails: TrainingDetails;
  status: string;
}

export interface TrainingDetails {
  _id : string;
  name : string;
	equipment : string;
	equimentIcon?: string;
	type: string;
	date: Date;
	manufacturer : string;
	model: string;
	document?: string;
}
