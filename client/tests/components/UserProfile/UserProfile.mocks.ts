import { FetchUserDocument, FetchUserQuery } from 'src/api/__generated__/types';
import { StandardMocks, TYPENAME } from 'tests/fixtures';
import { assembleMocks, MockParameters } from 'tests/testHelpers';

const TEST_USER = {
    __typename: TYPENAME.USER,
    id: '100',
    name: 'Buckaroo Banzai'
};

/**
 * fetchUser
 */

const fetchUserParams: MockParameters<FetchUserQuery> = {
    data: {
        user: TEST_USER
    },
    query: FetchUserDocument
};
export const fetchUserMocks: StandardMocks<FetchUserQuery> = assembleMocks(fetchUserParams);
