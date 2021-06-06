import { CreateGroupMutation, CreateGroupMutationVariables } from 'src/api/__generated__/CreateGroupMutation';
import { FetchGroupsQuery, FetchGroupsQuery_groups } from 'src/api/__generated__/FetchGroupsQuery';
import { JoinGroupMutation, JoinGroupMutationVariables } from 'src/api/__generated__/JoinGroupMutation';
import { createGroupMutationString, fetchGroupsQueryString, joinGroupMutationString } from 'src/api/api';
import { StandardMocks, TYPENAME, VALID } from 'tests/fixtures';
import { assembleMocks } from 'tests/testHelpers';

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
const fetchGroupsSuccessData: FetchGroupsQuery = {
    groups: mockGroups
};
export const fetchGroupsMocks: StandardMocks<JoinGroupMutation> = assembleMocks({
    data: fetchGroupsSuccessData,
    query: fetchGroupsQueryString
});

/*
 * joinGroups
 */
const joinGroupsVariables: JoinGroupMutationVariables = {
    groupId: Number(mockGroups[0].id)
};
const joinGroupsSuccessData: JoinGroupMutation = {
    joinGroup: Number(mockGroups[0].id)
};
export const joinGroupMocks: StandardMocks<JoinGroupMutation> = assembleMocks({
    data: joinGroupsSuccessData,
    query: joinGroupMutationString,
    variables: joinGroupsVariables
});

/*
 * createGroup
 */
const createGroupVariables: CreateGroupMutationVariables = {
    description: VALID.GROUP.DESCRIPTION,
    name: VALID.GROUP.NAME
};
const createGroupSuccessData: CreateGroupMutation = {
    createGroup: {
        __typename: TYPENAME.GROUP,
        createdAt: 'time',
        id: mockGroups[0].id
    }
};
export const createGroupMocks: StandardMocks<CreateGroupMutation> = assembleMocks({
    data: createGroupSuccessData,
    query: createGroupMutationString,
    variables: createGroupVariables
});
