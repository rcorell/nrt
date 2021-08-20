import {
    FetchUserWithGroupTopicsQuery,
    FetchUserWithGroupTopicsDocument,
    FetchUserWithGroupIdsQuery,
    FetchUserWithGroupIdsDocument
} from 'src/api/__generated__/types';
import { mockTopics } from 'tests/components/Topics/Topics.mocks';
import { StandardMocks, TYPENAME } from 'tests/fixtures';
import { mockGroups } from 'tests/mocks/groupMocks';
import { assembleMocks, MockParameters } from 'tests/testHelpers';

export const TEST_USER_WITHOUT_GROUP_IDS = {
    __typename: TYPENAME.USER,
    email: 'bbanzai@blueblazers.org',
    groups: [],
    id: '100',
    name: 'Buckaroo Banzai'
};

export const TEST_USER_WITH_GROUP_IDS = {
    __typename: TYPENAME.USER,
    email: 'bbanzai@blueblazers.org',
    groups: [{ id: mockGroups[1].id }],
    groupsCreated: [],
    id: '100',
    name: 'Buckaroo Banzai',
    topics: []
};

/**
 * fetchUserWithGroupIds
 */
const fetchUserWithGroupIdsParams: MockParameters<FetchUserWithGroupIdsQuery> = {
    data: {
        user: TEST_USER_WITH_GROUP_IDS
    },
    query: FetchUserWithGroupIdsDocument
};
export const fetchUserWithGroupIdsMocks: StandardMocks<FetchUserWithGroupIdsQuery> = assembleMocks(
    fetchUserWithGroupIdsParams
);

/**
 * fetchUserWithoutGroupIds
 */
const fetchUserWithoutGroupIdsParams: MockParameters<FetchUserWithGroupIdsQuery> = {
    data: {
        user: TEST_USER_WITHOUT_GROUP_IDS
    },
    query: FetchUserWithGroupIdsDocument
};
export const fetchUserWithoutGroupIdsMocks: StandardMocks<FetchUserWithGroupIdsQuery> = assembleMocks(
    fetchUserWithoutGroupIdsParams
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
