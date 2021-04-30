/* eslint @typescript-eslint/explicit-function-return-type: 0 */

import { createAction } from 'typesafe-actions';

export const addTopic = createAction('ADDTOPIC_ADD_TOPIC', resolve => (topic: string) => resolve({ topic }));
