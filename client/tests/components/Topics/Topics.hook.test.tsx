import { useTopics } from 'src/components/Topics/Topics.hook';
import { createHookMockingWrapper } from 'tests/testHelpers';
import { fetchTopicMocks } from './Topics.mocks';

describe('useUser custom hook', () => {
    it('should return a user', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(useTopics, fetchTopicMocks.success);
        expect(result.current.loading).toBeTruthy();
        expect(result.current.error).toBeUndefined();
        expect(result.current.topics).toBeUndefined();

        await waitForNextUpdate();
        expect(result.current.loading).toBeFalsy();
        expect(result.current.topics![0].title).toBe('t1-title');
        expect(result.current.error).toBeUndefined();
    });

    it('should fail with graphQLError', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(useTopics, fetchTopicMocks.graphQLError);
        expect(result.current.loading).toBeTruthy();
        expect(result.current.error).toBeUndefined();
        expect(result.current.topics).toBeUndefined();

        await waitForNextUpdate();
        expect(result.current.loading).toBeFalsy();
        expect(result.current.topics).toBeUndefined();
        expect(result.current.error).not.toBeUndefined();
    });

    it('should fail with network error', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(useTopics, fetchTopicMocks.networkError);
        expect(result.current.loading).toBeTruthy();
        expect(result.current.error).toBeUndefined();
        expect(result.current.topics).toBeUndefined();

        await waitForNextUpdate();
        expect(result.current.loading).toBeFalsy();
        expect(result.current.topics).toBeUndefined();
        expect(result.current.error).not.toBeUndefined();
    });
});
