import { GraphQLError } from 'graphql';

import { LoginMutation } from 'src/api/__generated__/LoginMutation';
import { loginMutationString } from 'src/api/api';
import { StandardMocks, TYPENAME, VALID } from 'tests/fixtures';

export const loginMocks: StandardMocks<LoginMutation> = {
    graphQLError: {
        request: {
            query: loginMutationString,
            variables: { email: VALID.EMAIL, password: VALID.PASSWORD }
        },
        result: {
            errors: [new GraphQLError('login: GraphQL error')]
        }
    },
    networkError: {
        error: new Error('login: network error'),
        request: {
            query: loginMutationString,
            variables: { email: VALID.EMAIL, password: VALID.PASSWORD }
        }
    },
    success: {
        request: {
            query: loginMutationString,
            variables: { email: VALID.EMAIL, password: VALID.PASSWORD }
        },
        result: {
            data: { login: { __typename: TYPENAME.AUTH_PAYLOAD, token: 'tokenValue' } }
        }
    }
};
