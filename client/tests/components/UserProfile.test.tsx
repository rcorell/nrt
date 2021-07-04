import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { LOADING_TEXT } from 'src/components/shared';
import { UserProfile } from 'src/components/UserProfile';
import { fetchUserWithGroupsMocks } from 'tests/mocks/userMocks';
import { renderComponent } from 'tests/testHelpers';

describe('UserProfile', () => {
    it('loading', () => {
        expect(renderComponent(UserProfile, [fetchUserWithGroupsMocks.success]).container).toMatchSnapshot();
    });

    it('success', async () => {
        const { container } = renderComponent(UserProfile, [fetchUserWithGroupsMocks.success]);

        await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

        expect(container).toMatchSnapshot();
    });

    describe('failure', () => {
        it('GraphQL error', async () => {
            const { container } = renderComponent(UserProfile, [fetchUserWithGroupsMocks.graphQLError]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(container).toMatchSnapshot();
        });

        it('network failure', async () => {
            const { container } = renderComponent(UserProfile, [fetchUserWithGroupsMocks.networkError]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(container).toMatchSnapshot();
        });
    });
});
