import { ActionType } from 'typesafe-actions';

import * as addGroupActions from './actions';

export interface AddGroupState {
    description: string;
    name: string;
}

export type AddGroupActions = ActionType<typeof addGroupActions>;
