import { CreateGroupMutation, CreateGroupMutationVariables } from 'src/api/__generated__/CreateGroupMutation';
import { FetchGroupsQuery, FetchGroupsQuery_groups } from 'src/api/__generated__/FetchGroupsQuery';
import { JoinGroupMutation, JoinGroupMutationVariables } from 'src/api/__generated__/JoinGroupMutation';
import { createGroupMutation, fetchGroupsQuery, joinGroupMutation } from 'src/api/api';
import { StandardMocks, TYPENAME, VALID } from 'tests/fixtures';
import { assembleMocks, MockParameters } from 'tests/testHelpers';

export const mockGroups: FetchGroupsQuery_groups[] = [
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
    query: fetchGroupsQuery
};
export const fetchGroupsMocks: StandardMocks<FetchGroupsQuery> = assembleMocks(fetchGroupsParams);

/*
 * joinGroups
 */
const joinGroupParams: MockParameters<JoinGroupMutation, JoinGroupMutationVariables> = {
    data: {
        joinGroup: Number(mockGroups[0].id)
    },
    query: joinGroupMutation,
    variables: {
        groupId: Number(mockGroups[0].id)
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
    query: createGroupMutation,
    variables: {
        description: VALID.GROUP.DESCRIPTION,
        name: VALID.GROUP.NAME
    }
};
export const createGroupMocks: StandardMocks<CreateGroupMutation> = assembleMocks(createGroupParameters);
