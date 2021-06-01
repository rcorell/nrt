import {
    createTopicMutationString,
    fetchGroupsQueryString,
    fetchUserQueryString,
    joinGroupMutationString
} from 'src/api/api';
import { VALID } from 'tests/fixtures';

export const mockGroup = {
    __typename: 'Group',
    description: 'test-description',
    id: '42',
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
    error: new Error('network-error'),
    request: {
        query: fetchGroupsQueryString,
        variables: {}
    }
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
                    groups: [],
                    id: '11',
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
                    groups: [mockGroup],
                    id: '11',
                    topics: []
                }
            }
        }
    }
};

export const mockJoinGroup = {
    networkError: {
        error: new Error('joinGroup: network-error'),
        request: {
            query: joinGroupMutationString,
            variables: { groupId: 42 }
        }
    },
    success: {
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
    }
};

export const mockCreateTopic = {
    networkError: {
        error: new Error('createTopic: network-error'),
        newData: jest.fn(),
        request: {
            query: createTopicMutationString,
            variables: { description: VALID.TOPIC.DESCRIPTION, groupId: '42', title: VALID.TOPIC.TITLE }
        }
    },
    success: {
        newData: jest.fn(),
        request: {
            query: createTopicMutationString,
            variables: { description: VALID.TOPIC.DESCRIPTION, groupId: '42', title: VALID.TOPIC.TITLE }
        },
        result: {
            data: { createTopic: { id: '777' } }
        }
    }
};
