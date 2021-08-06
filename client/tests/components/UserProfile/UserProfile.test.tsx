import { UserProfile } from 'src/components/UserProfile/UserProfile';

import { createComponentMocks, testComponent } from 'tests/testHelpers';

const mocks = createComponentMocks({
    user: {
        name: 'Buckaroo Banzai'
    }
});

jest.mock('src/components/UserProfile/UserProfile.hook', () => ({
    useUser: () => mocks[mocks.mockState]
}));

testComponent(UserProfile, mocks);
