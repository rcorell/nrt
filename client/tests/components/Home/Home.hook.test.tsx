import { useUserWithGroupTopics } from 'src/components/Home/Home.hook';
import { createHookMockingWrapper } from 'tests/testHelpers';

import { fetchUserMocks } from './Home.mocks';

const validateInitialState = (result: any) => {
    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
    expect(result.current.user).toBeUndefined();
};

describe('useUser custom hook', () => {
    it.only('should return a user', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(
            useUserWithGroupTopics,
            fetchUserMocks.success
        );
        validateInitialState(result);

        await waitForNextUpdate();

        expect(result.current.loading).toBeFalsy();
        expect(result.current.user!.id).toBe('100');
        expect(result.current.user!.groups).toBeTruthy();
        expect(result.current.error).toBeUndefined();
    });

    it('should fail with graphQLError', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(
            useUserWithGroupTopics,
            fetchUserMocks.graphQLError
        );
        validateInitialState(result);

        await waitForNextUpdate();

        expect(result.current.loading).toBeFalsy();
        expect(result.current.user).toBeUndefined();
        expect(result.current.error).not.toBeUndefined();
    });

    it('should fail with network error', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(
            useUserWithGroupTopics,
            fetchUserMocks.networkError
        );
        validateInitialState(result);

        await waitForNextUpdate();

        expect(result.current.loading).toBeFalsy();
        expect(result.current.user).toBeUndefined();
        expect(result.current.error).not.toBeUndefined();
    });
});
