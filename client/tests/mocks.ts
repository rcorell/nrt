import {
    createTopicMutationString,
    fetchGroupsQueryString,
    fetchUserQueryString,
    joinGroupMutationString
} from 'src/api/api';
import { VALID } from 'tests/fixtures';

export const mockGroup = {
    __typename: 'Group',
    id: '42',
    description: 'test-description',
    name: 'test-name'
};

export const mockFetchGroups = {
    request: {
        query: fetchGroupsQueryString,
        variables: {}
    },
    result: {
        data: {
            groups: [mockGroup]
        }
    }
};

export const mockFetchGroupsWithNetworkError = {
    request: {
        query: fetchGroupsQueryString,
        variables: {}
    },
    error: new Error('network-error')
};

export const mockFetchUser = {
    userWithNoGroups: {
        request: {
            query: fetchUserQueryString,
            variables: {}
        },
        result: {
            data: {
                user: {
                    __typename: 'User',
                    id: '11',
                    groups: [],
                    topics: []
                }
            }
        }
    },
    userWithOneGroup: {
        request: {
            query: fetchUserQueryString,
            variables: {}
        },
        result: {
            data: {
                user: {
                    __typename: 'User',
                    id: '11',
                    groups: [mockGroup],
                    topics: []
                }
            }
        }
    }
};

export const mockJoinGroup = {
    request: {
        query: joinGroupMutationString,
        variables: { groupId: 42 }
    },
    result: {
        data: {
            joinGroup: {
                id: 42
            }
        }
    }
};

export const mockCreateTopic = {
    networkError: {
        newData: jest.fn(),
        request: {
            query: createTopicMutationString,
            variables: { groupId: '42', title: VALID.TOPIC.TITLE, description: VALID.TOPIC.DESCRIPTION }
        },
        error: new Error('createTopic: network-error')
    },
    success: {
        newData: jest.fn(),
        request: {
            query: createTopicMutationString,
            variables: { groupId: '42', title: VALID.TOPIC.TITLE, description: VALID.TOPIC.DESCRIPTION }
        },
        result: {
            data: { createTopic: { id: '777' } }
        }
    }
};
