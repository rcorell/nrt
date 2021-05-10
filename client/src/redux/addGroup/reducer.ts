import { getType } from 'typesafe-actions';

import * as addGroupActions from './actions';
import { AddGroupActions, AddGroupState } from './types';

const INITIAL_STATE: AddGroupState = {
    description: '',
    name: ''
};

export const addGroupReducer = (state: AddGroupState = INITIAL_STATE, action: AddGroupActions): AddGroupState => {
    switch (action.type) {
        case getType(addGroupActions.addGroup):
        default:
            return state;
    }
};
