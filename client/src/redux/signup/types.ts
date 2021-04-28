import { ActionType } from 'typesafe-actions';

import * as signupActions from './actions';

export interface SignupState {
    dummy: string;
}

export type SignupActions = ActionType<typeof signupActions>;
