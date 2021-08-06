import * as React from 'react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';
import { fetchUserMocks } from 'tests/mocks/userMocks';
import { useUser } from 'src/components/UserProfile/UserProfile.hook';

describe('useUser custom hook', () => {
    function getWrapper<T>(mock: MockedResponse<T>) {
        const wrapper = ({ children }: { children: any }) => (
            <MockedProvider mocks={[mock]} addTypename={false}>
                {children}
            </MockedProvider>
        );
        const { result, waitForNextUpdate } = renderHook(() => useUser(), {
            wrapper
        });
        return { result, waitForNextUpdate };
    }

    it('should return a user', async () => {
        const { result, waitForNextUpdate } = getWrapper(fetchUserMocks.success);
        expect(result.current.loading).toBeTruthy();
        expect(result.current.error).toBeUndefined();
        expect(result.current.user).toBeUndefined();

        await waitForNextUpdate();

        expect(result.current.user!.name).toBe('Buckaroo Banzai');
    });

    it('should fail', async () => {
        const { result, waitForNextUpdate } = getWrapper(fetchUserMocks.graphQLError);
        expect(result.current.loading).toBeTruthy();
        expect(result.current.error).toBeUndefined();
        expect(result.current.user).toBeUndefined();

        await waitForNextUpdate();

        expect(result.current.user).toBeUndefined();
        expect(result.current.error).not.toBeUndefined();
    });
});
