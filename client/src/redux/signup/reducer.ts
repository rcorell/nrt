import { getType } from 'typesafe-actions';

import * as signupActions from './actions';
import { SignupActions, SignupState } from './types';

const INITIAL_STATE: SignupState = {
    dummy: 'dummy'
};

export const signupReducer = (state: SignupState = INITIAL_STATE, action: SignupActions): SignupState => {
    switch (action.type) {
        case getType(signupActions.signup):
            return {
                ...state
            };
        default:
            return state;
    }
};
