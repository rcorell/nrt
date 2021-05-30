import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { FetchGroupsQuery } from 'src/api/__generated__/FetchGroupsQuery';
import { fetchGroupsQueryString } from 'src/api/api';
import { Groups } from 'src/components/Groups';

import { renderComponent } from 'tests/testHelpers';

describe('Groups', () => {
    const LOADING_TEXT = 'Loading...';

    describe('snapshots', () => {
        it('loading', () => {
            expect(renderComponent(Groups)).toMatchSnapshot();
        });

        it('success', async () => {
            const data: FetchGroupsQuery = {
                groups: [{ __typename: 'Group', description: 'test-description', name: 'test-name' }]
            };

            renderComponent(Groups, fetchGroupsQueryString, {}, { data });

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            // Material UI devs literally hate snapshots
            expect(screen.queryByText('test-description')).toBeInTheDocument();
            expect(screen.queryByText('test-name')).toBeInTheDocument();
        });

        it('network error', async () => {
            const networkError = new Error('Network-error');

            const topicsRender = renderComponent(Groups, fetchGroupsQueryString, {}, { error: networkError });

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText('No results')).toBeNull();

            expect(topicsRender).toMatchSnapshot();
        });

        it('Malformed results', async () => {
            const topicsRender = renderComponent(Groups, fetchGroupsQueryString, {}, { data: null });

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(topicsRender).toMatchSnapshot();
        });
    });
});
