/* eslint @typescript-eslint/explicit-function-return-type: 0 */

import { createAction } from 'typesafe-actions';

export const signup = createAction('SIGNUP_SIGNUP', resolve => (email: string, name: string, password: string) =>
    resolve({ email, name, password })
);
