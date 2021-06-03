import { MockedResponse } from '@apollo/client/testing';
import { GraphQLError } from 'graphql';

import { FetchUserQuery } from 'src/api/__generated__/FetchUserQuery';
import { FetchUserWithGroupTopicsQueryString } from 'src/api/__generated__/FetchUserWithGroupTopicsQueryString';
import { fetchUserQueryString, fetchUserWithGroupTopicsQueryString } from 'src/api/api';
import { StandardMocks, TYPENAME } from 'tests/fixtures';
import { mockGroups } from 'tests/mocks/groupMocks';
import { mockTopics } from 'tests/mocks/topicMocks';

interface FetchUserMocks {
    graphQLError: MockedResponse<FetchUserQuery>;
    networkError: MockedResponse<FetchUserQuery>;
    success: {
        withGroups: MockedResponse<FetchUserQuery>;
        withoutGroups: MockedResponse<FetchUserQuery>;
    };
}

export const fetchUserMocks: FetchUserMocks = {
    graphQLError: {
        request: {
            query: fetchUserQueryString,
            variables: {}
        },
        result: {
            errors: [new GraphQLError('fetchUser - GraphQL error')]
        }
    },
    networkError: {
        error: new Error('fetchUser - network error'),
        request: {
            query: fetchUserQueryString,
            variables: {}
        }
    },
    success: {
        withGroups: {
            request: {
                query: fetchUserQueryString,
                variables: {}
            },
            result: {
                data: {
                    user: {
                        __typename: TYPENAME.USER,
                        groups: mockGroups,
                        topics: []
                    }
                }
            }
        },
        withoutGroups: {
            request: {
                query: fetchUserQueryString,
                variables: {}
            },
            result: {
                data: {
                    user: {
                        __typename: TYPENAME.USER,
                        groups: [],
                        topics: []
                    }
                }
            }
        }
    }
};

export const fetchUserWithGroupTopicsMocks: StandardMocks<FetchUserWithGroupTopicsQueryString> = {
    graphQLError: {
        request: {
            query: fetchUserWithGroupTopicsQueryString,
            variables: {}
        },
        result: {
            errors: [new GraphQLError('fetchUserWithGroupTopics - GraphQL error')]
        }
    },

    networkError: {
        error: new Error('fetchUserWithGroupTopics - network error'),
        request: {
            query: fetchUserWithGroupTopicsQueryString,
            variables: {}
        }
    },

    success: {
        request: {
            query: fetchUserWithGroupTopicsQueryString,
            variables: {}
        },
        result: {
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
            }
        }
    }
};
