import { ActionType } from 'typesafe-actions';

import * as loginActions from './actions';

export enum LoginAttemptStatus {
    FAILURE = 'FAILURE',
    IN_PROGRESS = 'IN_PROGRESS',
    NOT_ATTEMPTED = 'NOT_ATTEMPTED',
    SUCCESS = 'SUCCESS'
}

export interface LoginState {
    authenticated: boolean;
    loginAttemptStatus: LoginAttemptStatus;
}

export type LoginActions = ActionType<typeof loginActions>;
