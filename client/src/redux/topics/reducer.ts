import { getType } from 'typesafe-actions';

import * as topicsActions from './actions';
import { TopicsActions, TopicsState } from './types';

const INITIAL_STATE: TopicsState = {
    topics: []
};

export const topicsReducer = (state: TopicsState = INITIAL_STATE, action: TopicsActions): TopicsState => {
    switch (action.type) {
        case getType(topicsActions.setTopics):
            return {
                ...state,
                topics: action.payload.topics
            };
        default:
            return state;
    }
};
