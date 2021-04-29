import { gql, GraphQLClient } from 'graphql-request';
import { SagaIterator } from 'redux-saga';
import { all, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import * as loginActions from 'src/redux/login/actions';
import * as signupActions from 'src/redux/signup/actions';
import { sign } from 'crypto';
import Cookies from 'js-cookie';

export function* watcher(): SagaIterator<void> {
    yield all([takeLatest(signupActions.signup, _signup)]);
}

const graphQLClient = new GraphQLClient('http://localhost:4000');

interface SignupResponse {
    token: string;
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

        Cookies.set('AUTH_TOKEN', signupResponse.token);
        yield put(loginActions.authenticated());
    } catch (error: any) {
        // catch all errors
    }

    // yield put(signupActions.failure());
}
