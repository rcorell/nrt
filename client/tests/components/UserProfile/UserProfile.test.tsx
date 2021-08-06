import React from 'react';
import { render } from '@testing-library/react';

import { UserProfile } from 'src/components/UserProfile/UserProfile';

let mockState: 'loading' | 'success' | 'failure' = 'loading';

jest.mock('src/components/UserProfile/UserProfile.hook', () => ({
    useUser: () => {
        switch (mockState) {
            case 'loading':
                return {
                    loading: true
                };

            case 'success':
                return {
                    loading: false,
                    user: {
                        name: 'Buckaroo Banzai'
                    }
                };

            case 'failure':
                return {
                    error: 'useUser hook error',
                    loading: false
                };
        }
    }
}));

describe('UserProfile', () => {
    it('loading', () => {
        mockState = 'loading';
        expect(render(<UserProfile />).container).toMatchSnapshot();
    });

    it('failure', async () => {
        mockState = 'failure';
        expect(render(<UserProfile />).container).toMatchSnapshot();
    });

    it('success', async () => {
        mockState = 'success';
        expect(render(<UserProfile />).container).toMatchSnapshot();
    });
});
