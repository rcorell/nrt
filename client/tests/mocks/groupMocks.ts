import { GraphQLError } from 'graphql';

import { CreateGroupMutation } from 'src/api/__generated__/CreateGroupMutation';
import { FetchGroupsQuery } from 'src/api/__generated__/FetchGroupsQuery';
import { JoinGroupMutation } from 'src/api/__generated__/JoinGroupMutation';
import { createGroupMutationString, fetchGroupsQueryString, joinGroupMutationString } from 'src/api/api';
import { StandardMocks, TYPENAME, VALID } from 'tests/fixtures';

export const mockGroups = [
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

export const fetchGroupsMocks: StandardMocks<FetchGroupsQuery> = {
    graphQLError: {
        request: {
            query: fetchGroupsQueryString,
            variables: {}
        },
        result: {
            errors: [new GraphQLError('fetchGroups: GraphQL error')]
        }
    },
    networkError: {
        error: new Error('fetchGroups: network error'),
        request: {
            query: fetchGroupsQueryString,
            variables: {}
        }
    },
    success: {
        request: {
            query: fetchGroupsQueryString,
            variables: {}
        },
        result: {
            data: {
                groups: mockGroups
            }
        }
    }
};

export const joinGroupMocks: StandardMocks<JoinGroupMutation> = {
    graphQLError: {
        request: {
            query: joinGroupMutationString,
            variables: { groupId: Number(mockGroups[0].id) }
        },
        result: {
            errors: [new GraphQLError('joinGroup: GraphQL error')]
        }
    },
    networkError: {
        error: new Error('joinGroup: network error'),
        request: {
            query: joinGroupMutationString,
            variables: { groupId: Number(mockGroups[0].id) }
        }
    },
    success: {
        request: {
            query: joinGroupMutationString,
            variables: { groupId: Number(mockGroups[0].id) }
        },
        result: {
            data: {
                joinGroup: Number(mockGroups[0].id)
            }
        }
    }
};

export const createGroupMocks: StandardMocks<CreateGroupMutation> = {
    graphQLError: {
        request: {
            query: createGroupMutationString,
            variables: { description: VALID.GROUP.DESCRIPTION, name: VALID.GROUP.NAME }
        },
        result: {
            errors: [new GraphQLError('createGroup: GraphQL error')]
        }
    },
    networkError: {
        error: new Error('createGroup: network error'),
        request: {
            query: createGroupMutationString,
            variables: { description: VALID.GROUP.DESCRIPTION, name: VALID.GROUP.NAME }
        }
    },
    success: {
        request: {
            query: createGroupMutationString,
            variables: { description: VALID.GROUP.DESCRIPTION, name: VALID.GROUP.NAME }
        },
        result: {
            data: {
                createGroup: {
                    __typename: TYPENAME.GROUP,
                    createdAt: 'time',
                    id: mockGroups[0].id
                }
            }
        }
    }
};
