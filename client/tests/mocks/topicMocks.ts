import { GraphQLError } from 'graphql';

import { CreateTopicMutation } from 'src/api/__generated__/CreateTopicMutation';
import { createTopicMutationString } from 'src/api/api';
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

export const createTopicMocks: StandardMocks<CreateTopicMutation> = {
    graphQLError: {
        newData: jest.fn(),
        request: {
            query: createTopicMutationString,
            variables: { description: VALID.TOPIC.DESCRIPTION, groupId: mockGroups[0].id, title: VALID.TOPIC.TITLE }
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
            variables: { description: VALID.TOPIC.DESCRIPTION, groupId: mockGroups[0].id, title: VALID.TOPIC.TITLE }
        }
    },
    success: {
        newData: jest.fn(),
        request: {
            query: createTopicMutationString,
            variables: { description: VALID.TOPIC.DESCRIPTION, groupId: mockGroups[0].id, title: VALID.TOPIC.TITLE }
        },
        result: {
            data: { createTopic: { __typename: TYPENAME.TOPIC, id: '777' } }
        }
    }
};
