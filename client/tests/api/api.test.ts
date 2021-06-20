import {
    AUTHENTICATION_TOKEN_NAME,
    authHeader,
    isAuthenticated,
    logout,
    setAuthenticationToken
} from 'src/api/api';
import { localStorageMocks } from 'tests/testHelpers';

describe('API', () => {
    describe('authHeader()', () => {
        it('returns empty string for null', () => {
            expect(authHeader(null)).toEqual('');
        });

        it('returns empty string for empty string', () => {
            expect(authHeader('')).toEqual('');
        });

        it('returns bearer string for valid string', () => {
            expect(authHeader('foo')).toEqual('Bearer foo');
        });
    });

    describe('isAuthenticated()', () => {
        it('return boolean cast of localStorage token', () => {
            localStorageMocks.getItemMock.mockImplementation(() => 'token');

            const result = isAuthenticated();

            expect(result).toBe(true);
            expect(localStorageMocks.getItemMock).toHaveBeenCalledExactlyOnceWith(AUTHENTICATION_TOKEN_NAME);
        });
    });

    describe('logout()', () => {
        it('clears saved auth token', () => {
            localStorageMocks.setItemMock.mockImplementation(jest.fn());

            logout();

            expect(localStorageMocks.setItemMock).toHaveBeenCalledExactlyOnceWith(AUTHENTICATION_TOKEN_NAME, '');
        });
    });

    describe('setAuthenticationToken()', () => {
        it('sets auth token', () => {
            localStorageMocks.setItemMock.mockImplementation(jest.fn());

            setAuthenticationToken('test token');

            expect(localStorageMocks.setItemMock).toHaveBeenCalledExactlyOnceWith(
                AUTHENTICATION_TOKEN_NAME,
                'test token'
            );
        });
    });
});
