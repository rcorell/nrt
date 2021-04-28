import { SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import * as signupActions from '../redux/signup/actions';

export function* watcher(): SagaIterator<void> {
    // yield call(_checkAuthenticated);

    yield all([
        takeLatest(signupActions.signup, _signup),
    ]);
}

export function* _signup(action: ActionType<typeof signupActions.signup>): SagaIterator<void> {
	const { email, name, password } = action.payload;

	console.log(email, name, password);
}
