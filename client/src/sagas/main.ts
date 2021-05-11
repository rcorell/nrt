import { SagaIterator } from 'redux-saga';
import { spawn } from 'redux-saga/effects';

import { watcher as navigationWatcher } from './navigation';

export function* rootSaga(): SagaIterator<void> {
    yield spawn(navigationWatcher);
}
