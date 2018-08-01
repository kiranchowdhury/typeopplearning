import { Group } from '../auth/auth.state';
import { AuthFunction } from '../auth/auth.contract';

export class CurrentUser {
    authenticted: boolean;
    email: string;
    name: string;
    role: string;
}

