import { State } from '../state.types';

import { LoginAttemptStatus } from './types';

export const getIsAuthenticated = (state: State): boolean => {
    return state.login.authenticated;
};

export const getLoginAttemptStatus = (state: State): LoginAttemptStatus => {
    return state.login.loginAttemptStatus;
};
