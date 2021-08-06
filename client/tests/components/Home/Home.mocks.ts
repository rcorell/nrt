import { FetchUserWithGroupsAndTopicsDocument, FetchUserWithGroupTopicsQuery } from 'src/api/__generated__/types';
import { StandardMocks } from 'tests/fixtures';
import { assembleMocks, MockParameters } from 'tests/testHelpers';
import { TYPENAME, VALID } from 'tests/fixtures';

export const mockTopics = [
    {
        __typename: TYPENAME.TOPIC,
        description: 't1-desc',
        id: '100',
        title: 't1-title'
    },
    {
        __typename: TYPENAME.TOPIC,
        description: 't2-desc',
        id: '101',
        title: 't2-title'
    }
];

export const mockGroups = [
    {
        __typename: TYPENAME.GROUP,
        description: VALID.GROUP.DESCRIPTION,
        id: '40',
        name: VALID.GROUP.NAME,
        topics: [mockTopics[0]]
    },
    {
        __typename: TYPENAME.GROUP,
        description: VALID.GROUP.DESCRIPTION + '2',
        id: '41',
        name: VALID.GROUP.NAME + '2',
        topics: [mockTopics[1]]
    }
];

export const TEST_USER_WITH_GROUPS: FetchUserWithGroupTopicsQuery['user'] = {
    __typename: TYPENAME.USER,
    groups: mockGroups,
    id: '100'
};

const fetchUserParams: MockParameters<FetchUserWithGroupTopicsQuery> = {
    data: {
        user: TEST_USER_WITH_GROUPS
    },
    query: FetchUserWithGroupsAndTopicsDocument
};
export const fetchUserMocks: StandardMocks<FetchUserWithGroupTopicsQuery> = assembleMocks(fetchUserParams);
