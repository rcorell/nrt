import { MockedResponse } from '@apollo/client/testing';

import { FetchUserWithGroupTopicsQueryString } from 'src/api/__generated__/FetchUserWithGroupTopicsQueryString';
import {
    createTopicMutationString,
    fetchGroupsQueryString,
    fetchUserQueryString,
    fetchUserWithGroupTopicsQueryString,
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

const fetchUserWithGroupTopicsData: FetchUserWithGroupTopicsQueryString = {
    user: {
        __typename: 'User',
        groups: [
            {
                __typename: 'Group',
                description: 'g1-desc',
                id: '1',
                name: 'group1',
                topics: [
                    {
                        __typename: 'Topic',
                        description: 'g1-t1-desc',
                        id: '100',
                        title: 'g1-t1-title'
                    },
                    {
                        __typename: 'Topic',
                        description: 'g1-t2-desc2',
                        id: '101',
                        title: 'g1-t2-title'
                    }
                ]
            },
            {
                __typename: 'Group',
                description: 'g2-desc',
                id: '2',
                name: 'group2',
                topics: [
                    {
                        __typename: 'Topic',
                        description: 'g2-t1-desc',
                        id: '103',
                        title: 'g2--t2-title'
                    }
                ]
            }
        ],
        topics: []
    }
};

const mockFetchUserWithGroupTopics_success: MockedResponse = {
    request: {
        query: fetchUserWithGroupTopicsQueryString,
        variables: {}
    },
    result: {
        data: fetchUserWithGroupTopicsData
    }
};

const mockFetchUserWithGroupTopics_networkError: MockedResponse = {
    error: new Error('fetchUserWithGroupTopics - network-error'),
    request: {
        query: fetchUserWithGroupTopicsQueryString,
        variables: {}
    }
};

export const mockFetchUserWithGroupTopics = {
    networkError: mockFetchUserWithGroupTopics_networkError,
    success: mockFetchUserWithGroupTopics_success
};
