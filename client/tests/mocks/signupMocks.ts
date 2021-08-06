import { SignupDocument, SignupMutation, SignupMutationVariables } from 'src/api/__generated__/types';
import { StandardMocks, TYPENAME, VALID } from 'tests/fixtures';
import { assembleMocks, MockParameters } from 'tests/testHelpers';

const signupParams: MockParameters<SignupMutation, SignupMutationVariables> = {
    data: { signup: { __typename: TYPENAME.AUTH_PAYLOAD, token: 'signupTokenValue' } },
    query: SignupDocument,
    variables: { email: VALID.EMAIL, name: VALID.NAME, password: VALID.PASSWORD }
};

export const signupMocks: StandardMocks<SignupMutation> = assembleMocks(signupParams);
