import { combineReducers, createStore, Middleware } from 'redux';
import { getType } from 'typesafe-actions';

import * as loginActions from '../redux/login/actions';
import { loginReducer as login } from '../redux/login/reducer';
import { topicsReducer as topics } from 'src/redux/topics/reducer';
import { ReducerState } from './state.types';

const reducers: ReducerState = {
    login,
    topics
};

const LOGIN_ACTION_TYPE = getType(loginActions.login);

export const logMiddleware: Middleware = () => (next) => (action: any): any => {
    if (action.type !== LOGIN_ACTION_TYPE) {
        console.info('dispatching', action);
    }

    return next(action);
};

export const _combinedReducers = combineReducers(reducers);
export const Store = createStore(_combinedReducers);
