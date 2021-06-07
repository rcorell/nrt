import { CreateTopicMutation, CreateTopicMutationVariables } from 'src/api/__generated__/CreateTopicMutation';
import { FetchTopicsQuery, FetchTopicsQuery_topics } from 'src/api/__generated__/FetchTopicsQuery';
import { fetchTopicsQuery, createTopicMutation } from 'src/api/api';
import { StandardMocks, TYPENAME, VALID } from 'tests/fixtures';
import { assembleMocks, MockParameters } from 'tests/testHelpers';

import { mockGroups } from './groupMocks';

export const mockTopics: FetchTopicsQuery_topics[] = [
    {
        __typename: TYPENAME.TOPIC,
        description: 't1-desc',
        id: '100',
        title: 't1-title'
    },
    {
        __typename: TYPENAME.TOPIC,
        description: 't2-desc',
        id: '101',
        title: 't2-title'
    }
];

// Fiure out newData!

/*
 * createTopic
 */
const createTopicParams: MockParameters<CreateTopicMutation, CreateTopicMutationVariables> = {
    data: { createTopic: { __typename: TYPENAME.TOPIC, id: '777' } },
    query: createTopicMutation,
    spyOnNewData: true,
    variables: {
        description: VALID.TOPIC.DESCRIPTION,
        groupId: mockGroups[0].id,
        title: VALID.TOPIC.TITLE
    }
};
export const createTopicMocks: StandardMocks<CreateTopicMutation> = assembleMocks(createTopicParams);

/*
 * fetchTopics
 */
const fetchTopicsParams: MockParameters<FetchTopicsQuery> = {
    data: {
        topics: mockTopics
    },
    query: fetchTopicsQuery
};
export const fetchTopicMocks: StandardMocks<FetchTopicsQuery> = assembleMocks(fetchTopicsParams);
