import { ActionType } from 'typesafe-actions';

import * as signupActions from './actions';

export interface SignupState {
}

export type SignupActions = ActionType<typeof signupActions>;
