import { LoginDocument, LoginMutation, LoginMutationVariables } from 'src/api/__generated__/types';
import { StandardMocks, TYPENAME, VALID } from 'tests/fixtures';
import { assembleMocks, MockParameters } from 'tests/testHelpers';

const loginParams: MockParameters<LoginMutation, LoginMutationVariables> = {
    data: { login: { __typename: TYPENAME.AUTH_PAYLOAD, token: 'tokenValue' } },
    query: LoginDocument,
    variables: { email: VALID.EMAIL, password: VALID.PASSWORD }
};
export const loginMocks: StandardMocks<LoginMutation> = assembleMocks(loginParams);
