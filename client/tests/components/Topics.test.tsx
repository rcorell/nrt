import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { FetchTopicsQuery } from 'src/api/__generated__/FetchTopicsQuery';
import { fetchTopicsQueryString } from 'src/api/api';
import { Topics } from 'src/components/Topics';
import { renderComponent } from 'tests/testHelpers';

describe('Topics', () => {
    const LOADING_TEXT = 'Loading...';

    describe('snapshots', () => {
        it('loading', () => {
            expect(renderComponent(Topics).container).toMatchSnapshot();
        });

        it('success', async () => {
            const data: FetchTopicsQuery = {
                topics: [{ __typename: 'Topic', id: '88', description: 'test-description', title: 'test-title' }]
            };

            renderComponent(Topics, fetchTopicsQueryString, {}, { data });

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            // Material UI devs literally hate snapshots
            expect(screen.queryByText('test-description')).toBeInTheDocument();
            expect(screen.queryByText('test-title')).toBeInTheDocument();
        });

        it('network error', async () => {
            const networkError = new Error('Network-error');

            const { container } = renderComponent(Topics, fetchTopicsQueryString, {}, { error: networkError });

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText('No results')).toBeNull();

            expect(container).toMatchSnapshot();
        });

        it('Malformed results', async () => {
            const { container } = renderComponent(Topics, fetchTopicsQueryString, {}, { data: null });

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(container).toMatchSnapshot();
        });
    });
});
