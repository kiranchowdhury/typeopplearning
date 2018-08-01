export interface ProfileState {
  errorCode?: string;
  errorMsg?: string;
  loading?: boolean;
  loadingMsg?: string;
  profileDetails?: Profile;
}

export interface Profile {
  _id: number,
  name: string,
  url: string,
  email: string,
  phone: string,
  address: string,
  specialCredits: string
}
