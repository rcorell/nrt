import { fireEvent, screen } from '@testing-library/react';

import { loginMutationString } from 'src/api/api';
import { Login } from 'src/components/Login';
import { INVALID, VALID } from 'tests/fixtures';
import {
    getGlobalContext,
    lastNavigationPath,
    oneTick,
    renderComponent,
    setLastNavigationPath
} from 'tests/testHelpers';

describe('Login', () => {
    let loginContainer: HTMLElement;

    const setFields = (email: string, password: string) => {
        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');

        fireEvent.change(emailInput, { target: { value: email } });
        fireEvent.change(passwordInput, { target: { value: password } });
    };

    const renderLogin = () => {
        loginContainer = renderComponent(Login).container;
    };

    describe('snapshots', () => {
        beforeEach(() => {
            renderLogin();
        });

        it('fresh page load', () => {
            expect(loginContainer).toMatchSnapshot();
        });

        it('invalid parameters', () => {
            setFields(INVALID.EMAIL, INVALID.PASSWORD);

            expect(loginContainer).toMatchSnapshot();
        });

        it('valid parameters', async () => {
            setFields(VALID.EMAIL, VALID.PASSWORD);

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
            setLastNavigationPath('initial path');

            renderComponent(
                Login,
                loginMutationString,
                { email: VALID.EMAIL, password: VALID.PASSWORD },
                {
                    data: { login: { token: 'tokenValue' } }
                }
            );
            setFields(VALID.EMAIL, VALID.PASSWORD);
            const submitButton = screen.getByRole('button');
            fireEvent.click(submitButton);
            await oneTick();

            expect(localStorage.getItem('token')).toEqual('tokenValue');
            expect(getGlobalContext().authenticated).toBeTruthy();
            expect(lastNavigationPath).toEqual('/');
        });
    });

    describe('failure', () => {
        it('failed login: should display error message', async () => {
            localStorage.setItem('token', '');
            expect(getGlobalContext().authenticated).toBeFalsy();
            setLastNavigationPath('initial path');

            renderComponent(
                Login,
                loginMutationString,
                { email: VALID.EMAIL, password: VALID.PASSWORD },
                {
                    error: new Error('Login failure')
                }
            );
            setFields(VALID.EMAIL, VALID.PASSWORD);
            const submitButton = screen.getByRole('button');
            fireEvent.click(submitButton);
            await oneTick();

            expect(localStorage.getItem('token')).toEqual('');
            expect(getGlobalContext().authenticated).toBeFalsy();
            expect(lastNavigationPath).toEqual('initial path');
            expect(screen.queryByText(/Login failure/)).toBeInTheDocument();
        });
    });
});
