import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { Home } from 'src/components/Home';
import { LOADING_TEXT } from 'src/components/shared';
import { mockFetchUserWithGroupTopics } from 'tests/mocks';
import { renderComponentWithMocks } from 'tests/testHelpers';

describe('Home', () => {
    it('loading', () => {
        expect(renderComponentWithMocks(Home, [mockFetchUserWithGroupTopics.success]).container).toMatchSnapshot();
    });

    it('success', async () => {
        const { container } = renderComponentWithMocks(Home, [mockFetchUserWithGroupTopics.success]);

        await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

        expect(container).toMatchSnapshot();
    });

    it('failure', async () => {
        const { container } = renderComponentWithMocks(Home, [mockFetchUserWithGroupTopics.networkError]);

        await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

        expect(container).toMatchSnapshot();
    });
});
