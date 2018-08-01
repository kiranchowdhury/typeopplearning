import { Profile} from './profile-state';

export interface ProfileContract {
  status: number,
  code: string,
  customerDetail ?: Profile,
  message: string
}

export interface ProfileReqContract {
  email : string;
}

export interface ProfileUpdateReq {
  customerDetail : Profile;
}
