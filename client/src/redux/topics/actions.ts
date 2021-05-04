import { createAction } from 'typesafe-actions';

import { Topic } from './types';

export const fetchTopics = createAction('TOPICS_FETCH_TOPICS', resolve => () => resolve());
export const setTopics = createAction('TOPICS_SET_TOPICS', resolve => (topics: Topic[]) => resolve({ topics }));
