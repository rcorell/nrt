import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reduxSaga from 'redux-saga';
import { getType } from 'typesafe-actions';

import * as loginActions from '../redux/login/actions';
import { loginReducer as login } from '../redux/login/reducer';
import { rootSaga } from '../sagas/main';

import { ReducerState } from './state.types';

const reducers: ReducerState = {
    login
};

const LOGIN_ACTION_TYPE = getType(loginActions.login);

export const logMiddleware: Middleware = () => next => (action: any): any => {
    if (action.type !== LOGIN_ACTION_TYPE) {
        console.info('dispatching', action);
    }

    return next(action);
};

const sagaMiddleware = reduxSaga();
// exporting to support testing
export const _combinedReducers = combineReducers(reducers);
export const Store = createStore(
    _combinedReducers,
    composeWithDevTools(applyMiddleware(logMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
