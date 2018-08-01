import { ErrorResponse } from '../error/error-response';
export interface SignupState {
    email?: string;
    loading?: boolean;
    loadingMsg?: string;
    error?: ErrorResponse;
    resetPasswordView: boolean;
    activated?: boolean;
}
