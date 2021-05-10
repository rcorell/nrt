import { gql, GraphQLClient } from 'graphql-request';
import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import { signup } from 'src/api/api';
import * as addGroupActions from 'src/redux/addGroup/actions';
import * as addTopicActions from 'src/redux/addTopic/actions';
import * as loginActions from 'src/redux/login/actions';
import * as signupActions from 'src/redux/signup/actions';
import * as topicsActions from 'src/redux/topics/actions';

export function* watcher(): SagaIterator<void> {
    yield call(_checkAuthenticated);

    yield all([
        takeLatest(signupActions.signup, _signup),
        takeLatest(loginActions.login, _login),
        takeLatest(addGroupActions.addGroup, _addGroup),
        takeLatest(addTopicActions.addTopic, _addTopic),
        takeLatest(topicsActions.fetchTopics, _fetchTopics)
    ]);
}

const graphQLClient = new GraphQLClient('http://localhost:4000');

// interface SignupResponse {
//     signup: { token: string };
// }

interface LoginResponse {
    login: { token: string };
}

interface AddGroupResponse {
    id: number;
    createdAt: string;
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

// type Group = {
//     description: string;
//     name: string;
// };

export function* _signup(action: ActionType<typeof signupActions.signup>) {
    const { email, name, password } = action.payload;

    try {
        yield signup(email, name, password);
        yield put(loginActions.authenticated());
    } catch (error: any) {
        console.log(error);
    }
}

export function* _login(action: ActionType<typeof loginActions.login>) {
    const { email, password } = action.payload;

    const loginMutation = gql`
        mutation LoginMutation($email: String!, $password: String!) {
            login(email: $email, password: $password) {
                token
            }
        }
    `;

    try {
        const loginResponse: LoginResponse = yield graphQLClient.request<LoginResponse>(loginMutation, {
            email,
            password
        });

        const untypedResponse: any = loginResponse as any;

        if (untypedResponse.errors) {
            throw new Error(untypedResponse.errors);
        }

        const authValue = `Bearer ${loginResponse.login.token}`;

        graphQLClient.setHeader('Authorization', authValue);
        window.localStorage.setItem('email', action.payload.email);
        window.localStorage.setItem('token', loginResponse.login.token);
        yield put(loginActions.authenticated());
    } catch (error: any) {
        console.log('Login error', error);
    }

    // yield put(signupActions.failure());
}

export function* _checkAuthenticated(): SagaIterator<void> {
    const token = window.localStorage.getItem('token');

    if (!token) {
        return;
    }

    graphQLClient.setHeader('Authorization', `Bearer ${token}`);

    try {
        yield put(loginActions.authenticated());
    } catch (error) {
        console.log(error);
    }
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

export function* _addGroup(action: ActionType<typeof addGroupActions.addGroup>) {
    const { description, name } = action.payload;

    const addGroupMutation = gql`
        mutation CreateGroupMutation($name: String!, $description: String) {
            createGroup(name: $name, description: $description) {
                id
                createdAt
            }
        }
    `;

    try {
        const addGroupResponse: AddGroupResponse = yield graphQLClient.request<AddGroupResponse>(addGroupMutation, {
            description: description,
            name: name
        });

        console.log(JSON.stringify(addGroupResponse));

        const untypedResponse: any = addGroupResponse as any;

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
