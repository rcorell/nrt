import { FetchUserQuery } from 'src/api/__generated__/types';
import { useUser } from 'src/components/UserProfile/UserProfile.hook';
import { createHookMockingWrapper, CustomHookResult } from 'tests/testHelpers';
import { fetchUserMocks } from './UserProfile.mocks';

describe('useUser custom hook', () => {
    const checkInitialState = (state: CustomHookResult<FetchUserQuery>) => {
        expect(state.loading).toBeTruthy();
        expect(state.user).toBeUndefined();
        expect(state.error).toBeUndefined();
    };

    const checkErrorState = (state: CustomHookResult<FetchUserQuery>) => {
        expect(state.loading).toBeFalsy();
        expect(state.user).toBeUndefined();
        expect(state.error).not.toBeUndefined();
    };

    const checkSuccessState = (state: CustomHookResult<FetchUserQuery>) => {
        expect(state.loading).toBeFalsy();
        expect(state.error).toBeUndefined();
        expect(state.user!.name).toBe('Buckaroo Banzai');
    };

    it('should return a user', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(useUser, fetchUserMocks.success);
        checkInitialState(result.current);
        await waitForNextUpdate();
        checkSuccessState(result.current);
    });

    it('should fail with graphQLError', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(useUser, fetchUserMocks.graphQLError);
        checkInitialState(result.current);
        await waitForNextUpdate();
        checkErrorState(result.current);
    });

    it('should fail with network error', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(useUser, fetchUserMocks.networkError);
        checkInitialState(result.current);
        await waitForNextUpdate();
        checkErrorState(result.current);
    });
});
