import { fireEvent, screen } from '@testing-library/react';

import { loginMutationString } from 'src/api/api';
import { Login } from 'src/components/Login';

import { getGlobalContext, oneTick, renderComponent } from 'tests/testHelpers';

let lastNavigationPath = '';
jest.mock('hookrouter', () => {
    return {
        navigate: (path: string) => {
            lastNavigationPath = path;
        }
    };
});

describe('Login', () => {
    const INVALID_EMAIL = 'a@a.a';
    const VALID_EMAIL = 'totally@valid.email';
    const VALID_PASSWORD = 'qwerty1!';

    let loginContainer: HTMLElement;

    const setFields = (email: string, password: string) => {
        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');

        fireEvent.change(emailInput, { target: { value: email } });
        fireEvent.change(passwordInput, { target: { value: password } });
    };

    const renderLogin = () => {
        const loginRender = renderComponent(Login);

        loginContainer = loginRender.container;
    };

    describe('snapshots', () => {
        beforeEach(() => {
            renderLogin();
        });

        it('fresh page load', () => {
            expect(loginContainer).toMatchSnapshot();
        });

        it('invalid parameters', () => {
            setFields(INVALID_EMAIL, VALID_PASSWORD);

            expect(loginContainer).toMatchSnapshot();
        });

        it('valid parameters', async () => {
            setFields(VALID_EMAIL, VALID_PASSWORD);

            expect(loginContainer).toMatchSnapshot();
        });
    });

    it('should have the correct document title', () => {
        renderLogin();

        expect(window.document.title).toEqual('Top 5 Daily | Login');
    });

    describe('success', () => {
        it('should set authenticated and navigate to the home page', async () => {
            localStorage.setItem('token', '');
            expect(getGlobalContext().authenticated).toBeFalsy();
            lastNavigationPath = 'invalid path';

            renderComponent(
                Login,
                loginMutationString,
                { email: VALID_EMAIL, password: VALID_PASSWORD },
                {
                    data: { login: { token: 'tokenValue' } }
                }
            );
            setFields(VALID_EMAIL, VALID_PASSWORD);
            const submitButton = screen.getByRole('button');
            fireEvent.click(submitButton);
            await oneTick();

            expect(localStorage.getItem('token')).toEqual('tokenValue');
            expect(getGlobalContext().authenticated).toBeTruthy();
            expect(lastNavigationPath).toEqual('/');
        });
    });
});
