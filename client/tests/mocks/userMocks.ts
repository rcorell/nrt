import { FetchUserQuery } from 'src/api/__generated__/FetchUserQuery';
import { FetchUserWithGroupTopicsQueryString } from 'src/api/__generated__/FetchUserWithGroupTopicsQueryString';
import { fetchUserQuery, fetchUserWithGroupTopicsQuery } from 'src/api/api';
import { StandardMocks, TYPENAME } from 'tests/fixtures';
import { mockGroups } from 'tests/mocks/groupMocks';
import { mockTopics } from 'tests/mocks/topicMocks';
import { assembleMocks, MockParameters } from 'tests/testHelpers';

/**
 * fetchUserWithGroups
 */
const fetchUserWithGroupsParams: MockParameters<FetchUserQuery> = {
    data: {
        user: {
            __typename: TYPENAME.USER,
            groups: mockGroups,
            topics: []
        }
    },
    query: fetchUserQuery
};
export const fetchUserWithGroupsMocks: StandardMocks<FetchUserQuery> = assembleMocks(fetchUserWithGroupsParams);

/**
 * fetchUserWithoutGroups
 */
const fetchUserWithoutGroupsParams: MockParameters<FetchUserQuery> = {
    data: {
        user: {
            __typename: TYPENAME.USER,
            groups: [],
            topics: []
        }
    },
    query: fetchUserQuery
};
export const fetchUserWithoutGroupsMocks: StandardMocks<FetchUserQuery> = assembleMocks(
    fetchUserWithoutGroupsParams
);

/**
 * fetchUserWithGroupTopics
 */
const fetchUserWithGroupTopics: MockParameters<FetchUserWithGroupTopicsQueryString> = {
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
            topics: []
        }
    },
    query: fetchUserWithGroupTopicsQuery
};
export const fetchUserWithGroupTopicsMocks: StandardMocks<FetchUserWithGroupTopicsQueryString> = assembleMocks(
    fetchUserWithGroupTopics
);
