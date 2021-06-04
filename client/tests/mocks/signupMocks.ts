import { GraphQLError } from 'graphql';

import { SignupMutation, SignupMutationVariables } from 'src/api/__generated__/SignupMutation';
import { signupMutationString } from 'src/api/api';
import { StandardMocks, TYPENAME, VALID } from 'tests/fixtures';

const signupVariables: SignupMutationVariables = { email: VALID.EMAIL, name: VALID.NAME, password: VALID.PASSWORD };

export const signupMocks: StandardMocks<SignupMutation> = {
    graphQLError: {
        request: {
            query: signupMutationString,
            variables: signupVariables
        },
        result: {
            errors: [new GraphQLError('signup: GraphQL error')]
        }
    },
    networkError: {
        error: new Error('signup: network error'),
        request: {
            query: signupMutationString,
            variables: signupVariables
        }
    },
    success: {
        request: {
            query: signupMutationString,
            variables: signupVariables
        },
        result: {
            data: { signup: { __typename: TYPENAME.AUTH_PAYLOAD, token: 'signupTokenValue' } }
        }
    }
};
