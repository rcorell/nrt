import { MockedProvider } from '@apollo/client/testing';
import { signupMocks } from 'tests/mocks/signupMocks';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useSignup } from 'src/components/Signup/Signup.hook';
import { VALID } from 'tests/fixtures';
import { act } from 'react-test-renderer';

describe('useTopics custom hook', () => {
    it('should succeed', async () => {
        const wrapper = ({ children }: { children: any }) => (
            <MockedProvider mocks={[signupMocks.success]} addTypename={false}>
                {children}
            </MockedProvider>
        );
        const { result, waitForNextUpdate } = renderHook<any, ReturnType<typeof useSignup>>(() => useSignup(), {
            wrapper
        });

        expect(result.current.error).toBeUndefined();
        expect(result.current.loading).toBeFalsy();
        act(() => {
            result.current.signup(VALID.EMAIL, VALID.NAME, VALID.PASSWORD);
        });
        expect(result.current.error).toBeUndefined();
        expect(result.current.loading).toBeTruthy();
        await waitForNextUpdate();
        expect(result.current.error).toBeUndefined();
        expect(result.current.loading).toBeFalsy();
        expect(result.current.result!.token).toBe('signupTokenValue');
    });
});
