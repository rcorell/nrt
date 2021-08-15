import { FetchTopicsQuery } from 'src/api/__generated__/types';
import { Topics } from 'src/components/Topics/Topics';
import { createComponentMocks, testComponent } from 'tests/testHelpers';

const mocks = createComponentMocks<FetchTopicsQuery>({
    topics: [
        {
            description: 'd1',
            group: {
                id: '1',
                name: 'g1'
            },
            id: '1',
            title: 't1'
        }
    ]
});

jest.mock('src/components/Topics/Topics.hook', () => ({
    useTopics: () => mocks[mocks.mockState]
}));

testComponent(Topics, mocks);
