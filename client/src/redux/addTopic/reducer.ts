import { getType } from 'typesafe-actions';

import * as addTopicActions from './actions';
import { AddTopicActions, AddTopicState } from './types';

const INITIAL_STATE: AddTopicState = {
    topic: ''
};

export const addTopicReducer = (state: AddTopicState = INITIAL_STATE, action: AddTopicActions): AddTopicState => {
    switch (action.type) {
        case getType(addTopicActions.addTopic):
        default:
            return state;
    }
};
