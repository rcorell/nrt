import { ActionType } from 'typesafe-actions';

import * as addTopicActions from './actions';

export interface AddTopicState {
    topic: string;
}

export type AddTopicActions = ActionType<typeof addTopicActions>;
