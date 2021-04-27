import { getType } from 'typesafe-actions';

import * as loginActions from './actions';
import { LoginActions, LoginAttemptStatus, LoginState } from './types';

const INITIAL_STATE: LoginState = {
    authenticated: process.env.REACT_APP_ENV === 'local',
    loginAttemptStatus: LoginAttemptStatus.NOT_ATTEMPTED
};

export const loginReducer = (state: LoginState = INITIAL_STATE, action: LoginActions): LoginState => {
    switch (action.type) {
        case getType(loginActions.login):
            return {
                ...state,
                loginAttemptStatus: LoginAttemptStatus.IN_PROGRESS
            };
        case getType(loginActions.authenticated):
            return {
                ...state,
                authenticated: true,
                loginAttemptStatus: LoginAttemptStatus.SUCCESS
            };
        case getType(loginActions.failure):
            return {
                ...state,
                authenticated: false,
                loginAttemptStatus: LoginAttemptStatus.FAILURE
            };
        case getType(loginActions.logout):
            return {
                ...state,
                authenticated: false,
                loginAttemptStatus: LoginAttemptStatus.NOT_ATTEMPTED
            };
        default:
            return state;
    }
};
