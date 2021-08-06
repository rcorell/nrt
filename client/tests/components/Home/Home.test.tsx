import { FetchUserWithGroupTopicsQuery } from 'src/api/__generated__/types';
import { Home } from 'src/components/Home/Home';

import { TEST_USER_WITH_GROUPS } from 'tests/mocks/userMocks';
import { createComponentMocks, testComponent } from 'tests/testHelpers';

const mocks = createComponentMocks<FetchUserWithGroupTopicsQuery>({
    user: TEST_USER_WITH_GROUPS
});

jest.mock('src/components/Home/Home.hook', () => ({
    useUserWithGroupTopics: () => mocks[mocks.mockState]
}));

testComponent(Home, mocks);
