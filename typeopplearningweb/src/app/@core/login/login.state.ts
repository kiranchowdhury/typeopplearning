import { ErrorResponse } from '../error/error-response';
export interface LoginState {
    authenticated: boolean;
    email?: string;
    name?: string,
    role?: string,
    loading?: boolean;
    loadingMsg?: string;
    error?: ErrorResponse;
}
