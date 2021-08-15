import { render } from '@testing-library/react';
import React from 'react';

import { FetchUserWithGroupTopicsQuery } from 'src/api/__generated__/types';
import { Home } from 'src/components/Home/Home';
import { createComponentMocks, testComponent } from 'tests/testHelpers';

import { TEST_USER_WITH_GROUPS } from './Home.mocks';

const mocks = createComponentMocks<FetchUserWithGroupTopicsQuery>({
    user: TEST_USER_WITH_GROUPS
});

mocks.noGroups = {
    user: {
        groups: []
    }
};

jest.mock('src/components/Home/Home.hook', () => ({
    useUserWithGroupTopics: () => mocks[mocks.mockState]
}));

testComponent(Home, mocks);

it('shows "join a group" if user has no groups', () => {
    mocks.mockState = 'noGroups';
    expect(render(<Home />).container).toMatchSnapshot();
});
