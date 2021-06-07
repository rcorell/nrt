import {
    AUTHENTICATION_TOKEN_NAME,
    authHeader,
    isAuthenticated,
    logout,
    setAuthenticationToken
} from 'src/api/api';

describe('API', () => {
    let getItemMock: jest.SpyInstance;
    let setItemMock: jest.SpyInstance;

    beforeAll(() => {
        getItemMock = jest.spyOn(window.localStorage.__proto__, 'getItem');
        setItemMock = jest.spyOn(window.localStorage.__proto__, 'setItem');
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

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
            getItemMock.mockImplementation(() => 'token');

            const result = isAuthenticated();

            expect(result).toBe(true);
            expect(getItemMock).toHaveBeenCalledExactlyOnceWith(AUTHENTICATION_TOKEN_NAME);
        });
    });

    describe('logout()', () => {
        it('clears saved auth token', () => {
            setItemMock.mockImplementation(jest.fn());

            logout();

            expect(setItemMock).toHaveBeenCalledExactlyOnceWith(AUTHENTICATION_TOKEN_NAME, '');
        });
    });

    describe('setAuthenticationToken()', () => {
        it('sets auth token', () => {
            setItemMock.mockImplementation(jest.fn());

            setAuthenticationToken('test token');

            expect(setItemMock).toHaveBeenCalledExactlyOnceWith(AUTHENTICATION_TOKEN_NAME, 'test token');
        });
    });
});
