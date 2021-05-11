import { gql, GraphQLClient } from 'graphql-request';
import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import * as addTopicActions from 'src/redux/addTopic/actions';
import * as topicsActions from 'src/redux/topics/actions';

export function* watcher(): SagaIterator<void> {
    yield all([
        takeLatest(addTopicActions.addTopic, _addTopic),
        takeLatest(topicsActions.fetchTopics, _fetchTopics)
    ]);
}

const graphQLClient = new GraphQLClient('http://localhost:4000');

interface AddTopicResponse {
    topic: string;
}

type Topic = {
    title: string;
    description: string;
};

interface FetchTopicsResponse {
    topics: Topic[];
}

export function* _addTopic(action: ActionType<typeof addTopicActions.addTopic>) {
    const { topic } = action.payload;

    const addTopicMutation = gql`
        mutation CreateTopicMutation($title: String!, $description: String) {
            createTopic(title: $title, description: $description) {
                id
                createdAt
            }
        }
    `;

    try {
        const addTopicResponse: AddTopicResponse = yield graphQLClient.request<AddTopicResponse>(addTopicMutation, {
            description: '',
            title: topic
        });

        console.log(JSON.stringify(addTopicResponse));

        const untypedResponse: any = addTopicResponse as any;

        if (untypedResponse.errors) {
            throw new Error(untypedResponse.errors);
        }

        // yield put(something);
    } catch (error: any) {
        console.log(error);
    }

    // yield put(signupActions.failure());
}

export const fetchTopics = async () => {
    const fetchTopicsQuery = gql`
        {
            topics {
                title
                description
            }
        }
    `;

    try {
        const getTopicsResponse: FetchTopicsResponse = await graphQLClient.request<FetchTopicsResponse>(
            fetchTopicsQuery
        );

        console.log(JSON.stringify(getTopicsResponse));

        const untypedResponse: any = getTopicsResponse as any;

        if (untypedResponse.errors) {
            throw new Error(untypedResponse.errors);
        }
        console.log(untypedResponse);

        return getTopicsResponse.topics as Topic[];
    } catch (error: any) {
        console.log(error);
    }

    return [];
};

export function* _fetchTopics(action: ActionType<typeof topicsActions.fetchTopics>) {
    const topics: Topic[] = yield call(fetchTopics);
    yield put(topicsActions.setTopics(topics));
}
