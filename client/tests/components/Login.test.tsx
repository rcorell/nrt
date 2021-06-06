import { fireEvent, screen } from '@testing-library/react';

import { Login } from 'src/components/Login';
import { INVALID, VALID } from 'tests/fixtures';
import { loginMocks } from 'tests/mocks/loginMocks';
import { lastNavigationPath, oneTick, renderComponent, setLastNavigationPath } from 'tests/testHelpers';

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
            setLastNavigationPath('initial path');

            renderComponent(Login, [loginMocks.success]);
            setFields(VALID.EMAIL, VALID.PASSWORD);
            const submitButton = screen.getByRole('button');
            fireEvent.click(submitButton);
            await oneTick();

            expect(localStorage.getItem('token')).toEqual('tokenValue');
            expect(lastNavigationPath).toEqual('/');
        });
    });

    describe('failure', () => {
        it('failed login: should display error message', async () => {
            localStorage.setItem('token', '');
            setLastNavigationPath('initial path');

            renderComponent(Login, [loginMocks.networkError]);
            setFields(VALID.EMAIL, VALID.PASSWORD);
            const submitButton = screen.getByRole('button');
            fireEvent.click(submitButton);
            await oneTick();

            expect(localStorage.getItem('token')).toEqual('');
            expect(lastNavigationPath).toEqual('initial path');
            expect(screen.queryByText(/login: network error/)).toBeInTheDocument();
        });
    });
});
