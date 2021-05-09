import { SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import { history } from 'src/components/routes/Routes';
import * as loginActions from 'src/redux/login/actions';
import * as navigationActions from 'src/redux/navigation/actions';
import { Path } from 'src/redux/navigation/types';

export function* watcher(): SagaIterator<void> {
    yield all([
        takeLatest([loginActions.authenticated, navigationActions.home], _goToHome),
        takeLatest(loginActions.logout, _goToLogout)
    ]);
}

export const _goToHome = (): void => {
    history.push(Path.HOME);
};

export const _goToLogout = (): void => {
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('token');
    history.push(Path.LOGIN);
};
