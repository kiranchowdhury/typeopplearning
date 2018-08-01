import { User, UserDetailData, UserTrainingStatus, EmployeeTraining} from './user-list-state';

export interface UserListContract {
  status: number;
  code: string;
  message: string;
  count?: number;
  userList?: User[];
}

export interface CreateUser {
  user: User;
}

export interface SaveUserContractRequest {
  users: User[];
}

export interface CreateUserResponse {
  status: number;
  code: string;
  message: string;
  userList?: User[];
}

export interface RemoveUser {
  user: User;
}

export interface RemoveUserResponse {
  status: number;
  code: string;
  message: string;
  user: User;
}

export interface UserDetailReq{
  id : string;
}

export interface UserDetailContract{
  status: number;
  code: string;
  message: string;
  userDetail : UserDetailData
}

export interface UserTrainingReq{
  id : string;
}

export interface UserTrainingContract {
  status: number;
  code: string;
  message: string;
  userTrainings?: EmployeeTraining[];
  count?: number;
}

export interface UpdateUserTrainingReq{
  training : EmployeeTraining;
}

export interface UpdatedUserTrainingContract{
  status: number;
  code: string;
  message: string;
  updatedUserTraining: EmployeeTraining;
}
