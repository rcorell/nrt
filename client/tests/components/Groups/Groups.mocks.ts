import {
    CreateGroupDocument,
    CreateGroupMutation,
    CreateGroupMutationVariables,
    FetchGroupsDocument,
    FetchGroupsQuery,
    FetchUserWithGroupIdsQuery,
    JoinGroupDocument,
    JoinGroupMutation,
    JoinGroupMutationVariables
} from 'src/api/__generated__/types';
import { StandardMocks, TYPENAME, VALID } from 'tests/fixtures';
import { createComponentMocks } from 'tests/testHelpers';
import { assembleMocks, MockParameters } from 'tests/testHelpers';

const TEST_GROUPS = [
    { description: 'g1-desc', id: '1', name: 'g1' },
    { description: 'g2-desc', id: '2', name: 'g2' }
];

export const groupsMocks = {
    useGroups: createComponentMocks<FetchGroupsQuery>({
        groups: TEST_GROUPS
    }),
    useJoinGroup: createComponentMocks<JoinGroupMutation>({}),
    useUser: createComponentMocks<FetchUserWithGroupIdsQuery>({
        user: { email: 'bbanzai@blueblazers.org', groups: [{ id: TEST_GROUPS[0].id }], id: '1', name: 'User1' }
    })
};

export const mockGroups: FetchGroupsQuery['groups'] = [
    {
        __typename: TYPENAME.GROUP,
        description: VALID.GROUP.DESCRIPTION,
        id: '40',
        name: VALID.GROUP.NAME
    },
    {
        __typename: TYPENAME.GROUP,
        description: VALID.GROUP.DESCRIPTION + '2',
        id: '41',
        name: VALID.GROUP.NAME + '2'
    }
];

/*
 * fetchGroups
 */
const fetchGroupsParams: MockParameters<FetchGroupsQuery> = {
    data: {
        groups: mockGroups
    },
    query: FetchGroupsDocument
};
export const fetchGroupsMocks: StandardMocks<FetchGroupsQuery> = assembleMocks(fetchGroupsParams);

/*
 * joinGroups
 */
const joinGroupParams: MockParameters<JoinGroupMutation, JoinGroupMutationVariables> = {
    data: {
        joinGroup: mockGroups[0].id
    },
    query: JoinGroupDocument,
    variables: {
        groupId: mockGroups[0].id
    }
};
export const joinGroupMocks: StandardMocks<JoinGroupMutation> = assembleMocks(joinGroupParams);

/*
 * createGroup
 */
const createGroupParameters: MockParameters<CreateGroupMutation, CreateGroupMutationVariables> = {
    data: {
        createGroup: {
            __typename: TYPENAME.GROUP,
            createdAt: 'time',
            id: mockGroups[0].id
        }
    },
    query: CreateGroupDocument,
    variables: {
        description: VALID.GROUP.DESCRIPTION,
        name: VALID.GROUP.NAME
    }
};
export const createGroupMocks: StandardMocks<CreateGroupMutation> = assembleMocks(createGroupParameters);
