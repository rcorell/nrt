import { StandardMocks, TYPENAME } from 'tests/fixtures';
import { mockGroups } from 'tests/mocks/groupMocks';
import { mockTopics } from 'tests/components/Topics/Topics.mocks';
import { assembleMocks, MockParameters } from 'tests/testHelpers';
import { FetchUserWithGroupTopicsQuery, FetchUserWithGroupTopicsDocument } from 'src/api/__generated__/types';

export const TEST_USER_WITHOUT_GROUPS = {
    __typename: TYPENAME.USER,
    email: 'bbanzai@blueblazers.org',
    groups: [],
    groupsCreated: [],
    id: '100',
    name: 'Buckaroo Banzai',
    topics: []
};

export const TEST_USER_WITH_GROUPS = {
    __typename: TYPENAME.USER,
    email: 'bbanzai@blueblazers.org',
    groups: [{ ...mockGroups[0], topics: [...(mockTopics[0] as any)] }],
    groupsCreated: [],
    id: '100',
    name: 'Buckaroo Banzai',
    topics: []
};

/**
 * fetchUserWithGroups
 */
const fetchUserWithGroupsParams: MockParameters<FetchUserWithGroupTopicsQuery> = {
    data: {
        user: TEST_USER_WITH_GROUPS
    },
    query: FetchUserWithGroupTopicsDocument
};
export const fetchUserWithGroupsMocks: StandardMocks<FetchUserWithGroupTopicsQuery> = assembleMocks(
    fetchUserWithGroupsParams
);

/**
 * fetchUserWithoutGroups
 */
const fetchUserWithoutGroupsParams: MockParameters<FetchUserWithGroupTopicsQuery> = {
    data: {
        user: TEST_USER_WITHOUT_GROUPS
    },
    query: FetchUserWithGroupTopicsDocument
};
export const fetchUserWithoutGroupsMocks: StandardMocks<FetchUserWithGroupTopicsQuery> = assembleMocks(
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
    query: FetchUserWithGroupTopicsDocument
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
    query: FetchUserWithGroupTopicsDocument
};
export const fetchUserWithGroupTopicsButNoGroupsMocks: StandardMocks<FetchUserWithGroupTopicsQuery> = assembleMocks(
    fetchUserWithGroupTopicsButHasNoGroups
);
