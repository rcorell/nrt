import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { LOADING_TEXT } from 'src/components/shared';
import { Topics } from 'src/components/Topics/Topics';
import { fetchTopicMocks } from 'tests/mocks/topicMocks';
import { renderComponent } from 'tests/testHelpers';

describe('Topics', () => {
    describe('snapshots', () => {
        it('loading', () => {
            expect(renderComponent(Topics).container).toMatchSnapshot();
        });

        it('success', async () => {
            renderComponent(Topics, [fetchTopicMocks.success]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText('t2-desc')).toBeInTheDocument();
            expect(screen.queryByText('t2-title')).toBeInTheDocument();
        });

        it('fetchTopics: network error', async () => {
            const { container } = renderComponent(Topics, [fetchTopicMocks.networkError]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText(/FetchTopics: network error/)).toBeInTheDocument();
            expect(container).toMatchSnapshot();
        });

        it('fetchTopics: GraphQL error', async () => {
            const { container } = renderComponent(Topics, [fetchTopicMocks.graphQLError]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText(/FetchTopics: GraphQL error/)).toBeInTheDocument();
            expect(container).toMatchSnapshot();
        });
    });
});
