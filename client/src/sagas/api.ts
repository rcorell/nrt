import { gql, GraphQLClient } from 'graphql-request';
import { SagaIterator } from 'redux-saga';
import { all, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import * as addTopicActions from 'src/redux/addTopic/actions';
import * as loginActions from 'src/redux/login/actions';
import * as signupActions from 'src/redux/signup/actions';
import * as topicsActions from 'src/redux/topics/actions';

export function* watcher(): SagaIterator<void> {
    yield all([
        takeLatest(signupActions.signup, _signup),
        takeLatest(addTopicActions.addTopic, _addTopic),
        takeLatest(topicsActions.fetchTopics, _fetchTopics)
    ]);
}

const graphQLClient = new GraphQLClient('http://localhost:4000');

interface SignupResponse {
    signup: { token: string };
}

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

export function* _signup(action: ActionType<typeof signupActions.signup>) {
    const { email, name, password } = action.payload;

    const signupMutation = gql`
        mutation SignupMutation($email: String!, $name: String!, $password: String!) {
            signup(email: $email, name: $name, password: $password) {
                token
            }
        }
    `;

    try {
        const signupResponse: SignupResponse = yield graphQLClient.request<SignupResponse>(signupMutation, {
            email,
            name,
            password
        });

        const untypedResponse: any = signupResponse as any;

        if (untypedResponse.errors) {
            throw new Error(untypedResponse.errors);
        }

        const authValue = `Bearer ${signupResponse.signup.token}`;

        graphQLClient.setHeader('Authorization', authValue);
        yield put(loginActions.authenticated());
    } catch (error: any) {
        // catch all errors
    }

    // yield put(signupActions.failure());
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

export function* _fetchTopics(action: ActionType<typeof topicsActions.fetchTopics>) {
    const fetchTopicsQuery = gql`
        {
            topics {
                title
                description
            }
        }
    `;

    try {
        const getTopicsResponse: FetchTopicsResponse = yield graphQLClient.request<FetchTopicsResponse>(
            fetchTopicsQuery
        );

        console.log(JSON.stringify(getTopicsResponse));

        const untypedResponse: any = getTopicsResponse as any;

        if (untypedResponse.errors) {
            throw new Error(untypedResponse.errors);
        }
        console.log(untypedResponse);

        yield put(topicsActions.setTopics(getTopicsResponse.topics));
    } catch (error: any) {
        console.log(error);
    }

    // yield put(signupActions.failure());
}
