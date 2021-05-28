import { fireEvent, screen } from '@testing-library/react';

import { signupMutationString } from 'src/api/api';
import { Signup } from 'src/components/Signup';

import { INVALID, VALID } from 'tests/fixtures';
import {
    getGlobalContext,
    lastNavigationPath,
    oneTick,
    renderComponent,
    setLastNavigationPath
} from 'tests/testHelpers';

describe('Signup', () => {
    let signupContainer: HTMLElement;

    const setFields = (email: string, name: string, password: string) => {
        const emailInput = screen.getByLabelText('Email');
        const nameInput = screen.getByLabelText('Name');
        const passwordInput = screen.getByLabelText('Password');

        fireEvent.change(emailInput, { target: { value: email } });
        fireEvent.change(nameInput, { target: { value: name } });
        fireEvent.change(passwordInput, { target: { value: password } });
    };

    const renderSignup = () => {
        signupContainer = renderComponent(Signup).container;
    };

    describe('snapshots', () => {
        beforeEach(() => {
            renderSignup();
        });

        it('fresh load', () => {
            expect(signupContainer).toMatchSnapshot();
        });

        it('invalid parameters', () => {
            setFields(INVALID.EMAIL, INVALID.NAME, INVALID.PASSWORD);

            expect(signupContainer).toMatchSnapshot();
        });

        it('valid parameters', async () => {
            setFields(VALID.EMAIL, VALID.NAME, VALID.PASSWORD);

            expect(signupContainer).toMatchSnapshot();
        });
    });

    it('should have the correct document title', () => {
        renderSignup();

        expect(window.document.title).toEqual('Top 5 Daily | Sign Up');
    });

    describe('success', () => {
        it('should set authenticated and navigate to the home page', async () => {
            localStorage.setItem('token', '');
            expect(getGlobalContext().authenticated).toBeFalsy();
            setLastNavigationPath('initial path');

            renderComponent(
                Signup,
                signupMutationString,
                { email: VALID.EMAIL, name: VALID.NAME, password: VALID.PASSWORD },
                {
                    data: { signup: { token: 'tokenValue' } }
                }
            );
            setFields(VALID.EMAIL, VALID.NAME, VALID.PASSWORD);
            const submitButton = screen.getByRole('button');
            fireEvent.click(submitButton);
            await oneTick();

            expect(localStorage.getItem('token')).toEqual('tokenValue');
            expect(getGlobalContext().authenticated).toBeTruthy();
            expect(lastNavigationPath).toEqual('/');
        });
    });

    describe('failure', () => {
        it('failed signup: should display error message', async () => {
            localStorage.setItem('token', '');
            expect(getGlobalContext().authenticated).toBeFalsy();
            setLastNavigationPath('initial path');

            renderComponent(
                Signup,
                signupMutationString,
                { email: VALID.EMAIL, name: VALID.NAME, password: VALID.PASSWORD },
                {
                    error: new Error('Signup failure')
                }
            );
            setFields(VALID.EMAIL, VALID.NAME, VALID.PASSWORD);
            const submitButton = screen.getByRole('button');
            fireEvent.click(submitButton);
            await oneTick();

            expect(localStorage.getItem('token')).toEqual('');
            expect(getGlobalContext().authenticated).toBeFalsy();
            expect(lastNavigationPath).toEqual('initial path');
            expect(screen.queryByText(/Signup failure/)).toBeInTheDocument();
        });
    });
});
