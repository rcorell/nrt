import { FetchTopicsQuery } from 'src/api/__generated__/types';
import { useTopics } from 'src/components/Topics/Topics.hook';
import { createHookMockingWrapper, CustomHookResult } from 'tests/testHelpers';

import { fetchTopicMocks } from './Topics.mocks';

describe('useTopics custom hook', () => {
    const checkInitialState = (state: CustomHookResult<FetchTopicsQuery>) => {
        expect(state.loading).toBeTruthy();
        expect(state.topics).toBeUndefined();
        expect(state.error).toBeUndefined();
    };

    const checkErrorState = (state: CustomHookResult<FetchTopicsQuery>) => {
        expect(state.loading).toBeFalsy();
        expect(state.topics).toBeUndefined();
        expect(state.error).not.toBeUndefined();
    };

    const checkSuccessState = (state: CustomHookResult<FetchTopicsQuery>) => {
        expect(state.loading).toBeFalsy();
        expect(state.error).toBeUndefined();
        expect(state.topics![0].title).toBe('t1-title');
    };

    it('should return a user', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(useTopics, fetchTopicMocks.success);
        checkInitialState(result.current);
        await waitForNextUpdate();
        checkSuccessState(result.current);
    });

    it('should fail with graphQLError', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(useTopics, fetchTopicMocks.graphQLError);
        checkInitialState(result.current);
        await waitForNextUpdate();
        checkErrorState(result.current);
    });

    it('should fail with network error', async () => {
        const { result, waitForNextUpdate } = createHookMockingWrapper(useTopics, fetchTopicMocks.networkError);
        checkInitialState(result.current);
        await waitForNextUpdate();
        checkErrorState(result.current);
    });
});
