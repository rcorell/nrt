import { ActionType } from 'typesafe-actions';

import * as topicsActions from './actions';

export type Topic = {
    title: string;
    description: string;
};

export interface TopicsState {
    topics: Topic[];
}

export type TopicsActions = ActionType<typeof topicsActions>;
