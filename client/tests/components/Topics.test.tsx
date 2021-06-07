import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { LOADING_TEXT } from 'src/components/shared';
import { Topics } from 'src/components/Topics';
import { fetchTopicMocks } from 'tests/mocks/topicMocks';
import { renderComponent } from 'tests/testHelpers';

describe('Topics', () => {
    beforeEach(jest.resetAllMocks);

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

            expect(screen.queryByText(/FetchTopicsQuery: network error/)).toBeInTheDocument();
            expect(container).toMatchSnapshot();
        });
    });
});
