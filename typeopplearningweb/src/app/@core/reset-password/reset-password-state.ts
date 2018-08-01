import { ErrorResponse } from '../error/error-response';
export interface PasswordResetState {
    email?: string;
    token?: string,
    password?: string,
    loading?: boolean;
    loadingMsg?: string;
    error?: ErrorResponse;
    authenticated?: boolean;
}
