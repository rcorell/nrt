import { GraphQLError } from 'graphql';

import { CreateTopicMutation, CreateTopicMutationVariables } from 'src/api/__generated__/CreateTopicMutation';
import { FetchTopicsQuery } from 'src/api/__generated__/FetchTopicsQuery';
import { fetchTopicsQueryString, createTopicMutationString } from 'src/api/api';
import { StandardMocks, TYPENAME, VALID } from 'tests/fixtures';

import { mockGroups } from './groupMocks';

export const mockTopics = [
    {
        __typename: TYPENAME.TOPIC,
        description: 't1-desc',
        id: '100',
        title: 't1-title'
    },
    {
        __typename: TYPENAME.TOPIC,
        description: 't2-desc2',
        id: '101',
        title: 't2-title'
    }
];

const createTopicVariables: CreateTopicMutationVariables = {
    description: VALID.TOPIC.DESCRIPTION,
    groupId: mockGroups[0].id,
    title: VALID.TOPIC.TITLE
};

export const createTopicMocks: StandardMocks<CreateTopicMutation> = {
    graphQLError: {
        newData: jest.fn(),
        request: {
            query: createTopicMutationString,
            variables: createTopicVariables
        },
        result: {
            errors: [new GraphQLError('createTopic: GraphQL error')]
        }
    },
    networkError: {
        error: new Error('createTopic: network error'),
        newData: jest.fn(),
        request: {
            query: createTopicMutationString,
            variables: createTopicVariables
        }
    },
    success: {
        newData: jest.fn(),
        request: {
            query: createTopicMutationString,
            variables: createTopicVariables
        },
        result: {
            data: { createTopic: { __typename: TYPENAME.TOPIC, id: '777' } }
        }
    }
};

const fetchTopicsData: FetchTopicsQuery = {
    topics: [{ __typename: 'Topic', description: 'test-description', id: '88', title: 'test-title' }]
};

export const fetchTopicMocks: StandardMocks<FetchTopicsQuery> = {
    graphQLError: {
        request: {
            query: fetchTopicsQueryString,
            variables: {}
        },
        result: {
            errors: [new GraphQLError('fetchTopics: GraphQL error')]
        }
    },
    networkError: {
        error: new Error('fetchTopics: network error'),
        request: {
            query: fetchTopicsQueryString,
            variables: {}
        }
    },
    success: {
        request: {
            query: fetchTopicsQueryString,
            variables: {}
        },
        result: {
            data: fetchTopicsData
        }
    }
};
