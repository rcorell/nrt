import { gql, GraphQLClient } from 'graphql-request';
import { SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import * as signupActions from '../redux/signup/actions';

export function* watcher(): SagaIterator<void> {
    yield all([takeLatest(signupActions.signup, _signup)]);
}

const graphQLClient = new GraphQLClient('http://localhost:4000');

export function* _signup(action: ActionType<typeof signupActions.signup>) {
    const { email, name, password } = action.payload;

    const mutation = gql`
        mutation SignupMutation($email: String!, $name: String!, $password: String!) {
            signup(email: $email, name: $name, password: $password) {
                token
            }
        }
    `;

    const variables = {
        email,
        name,
        password
    };

    interface TData {
        token: string;
    }

    const data: TData = yield graphQLClient.request<TData>(mutation, variables);

    console.log(JSON.stringify(data, undefined, 2));
}
