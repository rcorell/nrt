import { useUser } from 'src/components/UserProfile/UserProfile.hook';
import { createHookMockingWrapper } from 'tests/testHelpers';
import { fetchUserMocks } from './UserProfile.mocks';

describe('useUser custom hook', () => {
    it('should return a user', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(useUser, fetchUserMocks.success);
        expect(result.current.loading).toBeTruthy();
        expect(result.current.error).toBeUndefined();
        expect(result.current.user).toBeUndefined();

        await waitForNextUpdate();
        expect(result.current.loading).toBeFalsy();
        expect(result.current.user.name).toBe('Buckaroo Banzai');
        expect(result.current.error).toBeUndefined();
    });

    it('should fail with graphQLError', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(useUser, fetchUserMocks.graphQLError);
        expect(result.current.loading).toBeTruthy();
        expect(result.current.error).toBeUndefined();
        expect(result.current.user).toBeUndefined();

        await waitForNextUpdate();
        expect(result.current.loading).toBeFalsy();
        expect(result.current.user).toBeUndefined();
        expect(result.current.error).not.toBeUndefined();
    });

    it('should fail with network error', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(useUser, fetchUserMocks.networkError);
        expect(result.current.loading).toBeTruthy();
        expect(result.current.error).toBeUndefined();
        expect(result.current.user).toBeUndefined();

        await waitForNextUpdate();
        expect(result.current.loading).toBeFalsy();
        expect(result.current.user).toBeUndefined();
        expect(result.current.error).not.toBeUndefined();
    });
});
