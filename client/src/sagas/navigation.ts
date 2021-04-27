import { SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import { history } from '../components/routes/Routes';
import * as loginActions from '../redux/login/actions';
import * as navigationActions from '../redux/navigation/actions';
import { Path } from '../redux/navigation/types';


export function* watcher(): SagaIterator<void> {
    yield all([
        takeLatest([loginActions.authenticated, navigationActions.home], _goToHome),
        takeLatest(loginActions.logout, _goToLogout),
        takeLatest(navigationActions.waiting, _goToWaiting)
    ]);
}

export const _goToOutOfService = (): void => {
    history.push(Path.OUT_OF_SERVICE);
};

export const _goToHome = (): void => {
    history.push(Path.HOME);
}

export const _goToLogout = (): void => {
    window.localStorage.removeItem('email');
    history.push(Path.LOGIN);
};

export const _goToWaiting = (): void => {
    history.push(Path.WAITING);
};