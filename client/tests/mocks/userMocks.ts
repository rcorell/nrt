import { FetchUserQuery } from 'src/api/__generated__/FetchUserQuery';
import { FetchUserWithGroupTopicsQuery } from 'src/api/__generated__/FetchUserWithGroupTopicsQuery';
import { fetchUserQuery, fetchUserWithGroupTopicsQuery } from 'src/api/api';
import { StandardMocks, TYPENAME } from 'tests/fixtures';
import { mockGroups } from 'tests/mocks/groupMocks';
import { mockTopics } from 'tests/mocks/topicMocks';
import { assembleMocks, MockParameters } from 'tests/testHelpers';

const TEST_USER_WITHOUT_GROUPS = {
    __typename: TYPENAME.USER,
    email: 'bbanzai@blueblazers.org',
    groups: [],
    groupsCreated: [],
    id: '100',
    name: 'Buckaroo Banzai',
    topics: []
};

const TEST_USER_WITH_GROUPS = {
    __typename: TYPENAME.USER,
    email: 'bbanzai@blueblazers.org',
    groups: [mockGroups[0]],
    groupsCreated: [],
    id: '100',
    name: 'Buckaroo Banzai',
    topics: []
};

/**
 * fetchUserWithGroups
 */
const fetchUserWithGroupsParams: MockParameters<FetchUserQuery> = {
    data: {
        user: TEST_USER_WITH_GROUPS
    },
    query: fetchUserQuery
};
export const fetchUserWithGroupsMocks: StandardMocks<FetchUserQuery> = assembleMocks(fetchUserWithGroupsParams);

/**
 * fetchUserWithoutGroups
 */
const fetchUserWithoutGroupsParams: MockParameters<FetchUserQuery> = {
    data: {
        user: TEST_USER_WITHOUT_GROUPS
    },
    query: fetchUserQuery
};
export const fetchUserWithoutGroupsMocks: StandardMocks<FetchUserQuery> = assembleMocks(
    fetchUserWithoutGroupsParams
);

/**
 * fetchUserWithGroupTopics
 */
const fetchUserWithGroupTopics: MockParameters<FetchUserWithGroupTopicsQuery> = {
    data: {
        user: {
            __typename: TYPENAME.USER,
            groups: [
                {
                    __typename: TYPENAME.GROUP,
                    description: 'g1-desc',
                    id: '1',
                    name: 'group1',
                    topics: mockTopics
                },
                {
                    __typename: TYPENAME.GROUP,
                    description: 'g2-desc',
                    id: '2',
                    name: 'group2',
                    topics: mockTopics
                }
            ],
            id: '100'
        }
    },
    query: fetchUserWithGroupTopicsQuery
};
export const fetchUserWithGroupTopicsMocks: StandardMocks<FetchUserWithGroupTopicsQuery> = assembleMocks(
    fetchUserWithGroupTopics
);

/**
 * fetchUserWithGroupTopicsButHasNoGroups
 */
const fetchUserWithGroupTopicsButHasNoGroups: MockParameters<FetchUserWithGroupTopicsQuery> = {
    data: {
        user: {
            __typename: TYPENAME.USER,
            groups: [],
            id: '100'
        }
    },
    query: fetchUserWithGroupTopicsQuery
};
export const fetchUserWithGroupTopicsButNoGroupsMocks: StandardMocks<FetchUserWithGroupTopicsQuery> = assembleMocks(
    fetchUserWithGroupTopicsButHasNoGroups
);
