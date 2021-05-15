/* eslint @typescript-eslint/explicit-function-return-type: 0 */

import { createAction } from 'typesafe-actions';

export const login = createAction('LOGIN_LOGIN', (resolve) => (email: string, password: string) =>
    resolve({ email, password })
);
export const authenticated = createAction('LOGIN_AUTHENTICATED');
export const failure = createAction('LOGIN_FAILURE');
export const logout = createAction('LOGIN_LOGOUT');
