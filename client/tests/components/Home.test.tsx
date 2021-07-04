import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { Home } from 'src/components/Home';
import { LOADING_TEXT } from 'src/components/shared';
import { fetchUserWithGroupTopicsMocks, fetchUserWithGroupTopicsButNoGroupsMocks } from 'tests/mocks/userMocks';
import { renderComponent } from 'tests/testHelpers';

describe('Home', () => {
    it('loading', () => {
        expect(renderComponent(Home, [fetchUserWithGroupTopicsMocks.success]).container).toMatchSnapshot();
    });

    describe('success', () => {
        it('with groups', async () => {
            const { container } = renderComponent(Home, [fetchUserWithGroupTopicsMocks.success]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(container).toMatchSnapshot();
        });

        it('without groups', async () => {
            const { container } = renderComponent(Home, [fetchUserWithGroupTopicsButNoGroupsMocks.success]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(container).toMatchSnapshot();
        });
    });

    describe('failure', () => {
        it('GraphQL error', async () => {
            const { container } = renderComponent(Home, [fetchUserWithGroupTopicsMocks.graphQLError]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(container).toMatchSnapshot();
        });

        it('network failure', async () => {
            const { container } = renderComponent(Home, [fetchUserWithGroupTopicsMocks.networkError]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(container).toMatchSnapshot();
        });
    });
});
