export interface SignupRequest {
  email: string;
  specialcredit: string;
}
export interface PasswordRequest {
  password: string;
  newPassword: string;
  email: string;
}

export interface SignupResponse {
  status?: number;
  key?: string;
  code?: string;
  message?: string;
  email?: string;
}
