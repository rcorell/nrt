import React from 'react';
import { FetchUserWithGroupTopicsQuery } from 'src/api/__generated__/types';
import { Home } from 'src/components/Home/Home';
import { render } from '@testing-library/react';

import { TEST_USER_WITH_GROUPS } from 'tests/mocks/userMocks';
import { createComponentMocks, testComponent } from 'tests/testHelpers';

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

it('shows "join a group" if user has not groups', () => {
    mocks.mockState = 'noGroups';
    expect(render(<Home />).container).toMatchSnapshot();
});
