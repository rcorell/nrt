import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { LOADING_TEXT } from 'src/components/shared';
import { UserProfile } from 'src/components/UserProfile/UserProfile';
import { fetchUserMocks } from 'tests/mocks/userMocks';
import { renderComponent } from 'tests/testHelpers';

describe('UserProfile', () => {
    it('loading', () => {
        expect(renderComponent(UserProfile, [fetchUserMocks.success]).container).toMatchSnapshot();
    });

    it('success', async () => {
        const { container } = renderComponent(UserProfile, [fetchUserMocks.success]);

        await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

        expect(container).toMatchSnapshot();
    });

    describe('failure', () => {
        it('GraphQL error', async () => {
            const { container } = renderComponent(UserProfile, [fetchUserMocks.graphQLError]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(container).toMatchSnapshot();
        });

        it('network failure', async () => {
            const { container } = renderComponent(UserProfile, [fetchUserMocks.networkError]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(container).toMatchSnapshot();
        });
    });
});
