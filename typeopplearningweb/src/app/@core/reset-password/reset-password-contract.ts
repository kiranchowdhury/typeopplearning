export interface PasswordResetRequest {
  email: string;
  password: string;
  token: string;
}

export interface PasswordResetResponse {
  token: string;
  authenticated: boolean;
  email?: string;
  name?: string;
  role?: string;
}
