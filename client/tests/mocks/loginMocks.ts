import { LoginMutation, LoginMutationVariables } from 'src/api/__generated__/LoginMutation';
import { loginMutation } from 'src/api/api';
import { StandardMocks, TYPENAME, VALID } from 'tests/fixtures';
import { assembleMocks, MockParameters } from 'tests/testHelpers';

const loginParams: MockParameters<LoginMutation, LoginMutationVariables> = {
    data: { login: { __typename: TYPENAME.AUTH_PAYLOAD, token: 'tokenValue' } },
    query: loginMutation,
    variables: { email: VALID.EMAIL, password: VALID.PASSWORD }
};
export const loginMocks: StandardMocks<LoginMutation> = assembleMocks(loginParams);
