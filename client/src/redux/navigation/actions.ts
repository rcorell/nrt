/* eslint @typescript-eslint/explicit-function-return-type: 0 */

import { createAction } from 'typesafe-actions';

export const home = createAction('NAVIGATION_HOME');
export const waiting = createAction('NAVIGATION_WAITING');
