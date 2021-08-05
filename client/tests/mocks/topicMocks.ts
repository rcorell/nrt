import { StandardMocks, TYPENAME, VALID } from 'tests/fixtures';
import { assembleMocks, MockParameters } from 'tests/testHelpers';

import { mockGroups } from './groupMocks';
import {
    CreateTopicDocument,
    CreateTopicMutation,
    CreateTopicMutationVariables,
    FetchTopicsDocument,
    FetchTopicsQuery
} from 'src/api/__generated__/types';

export const mockTopics: FetchTopicsQuery['topics'] = [
    {
        __typename: TYPENAME.TOPIC,
        description: 't1-desc',
        group: { __typename: TYPENAME.GROUP, id: '200', name: 'group1' },
        id: '100',
        title: 't1-title'
    },
    {
        __typename: TYPENAME.TOPIC,
        description: 't2-desc',
        group: { __typename: TYPENAME.GROUP, id: '201', name: 'group2' },
        id: '101',
        title: 't2-title'
    }
];

/*
 * createTopic
 */
const createTopicParams: MockParameters<CreateTopicMutation, CreateTopicMutationVariables> = {
    data: { createTopic: { __typename: TYPENAME.TOPIC, id: '777' } },
    query: CreateTopicDocument,
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
    query: FetchTopicsDocument
};
export const fetchTopicMocks: StandardMocks<FetchTopicsQuery> = assembleMocks(fetchTopicsParams);
