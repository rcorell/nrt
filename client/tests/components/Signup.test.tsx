import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { GlobalContext } from 'src/components/GlobalContextProvider';
import { Signup } from 'src/components/Signup';
import { INVALID, VALID } from 'tests/fixtures';
import { signupMocks } from 'tests/mocks/signupMocks';
import { lastNavigationPath, oneTick, renderComponent, setLastNavigationPath } from 'tests/testHelpers';

describe('Signup', () => {
    let setItemMock: jest.SpyInstance;
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

    const submitForm = async () => {
        setFields(VALID.EMAIL, VALID.NAME, VALID.PASSWORD);
        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);
        await oneTick();
    };

    beforeAll(() => {
        setItemMock = jest.spyOn(window.localStorage.__proto__, 'setItem');
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

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
            setLastNavigationPath('initial path');
            const originalUseContext = React.useContext;
            const setAuthenticatedMock = jest.fn();
            jest.spyOn(React, 'useContext').mockImplementation((context) => {
                if (context === GlobalContext) {
                    return {
                        setAuthenticated: setAuthenticatedMock
                    };
                }
                return originalUseContext(context);
            });

            renderComponent(Signup, [signupMocks.success]);
            await submitForm();

            expect(setItemMock).toHaveBeenCalledExactlyOnceWith('token', 'signupTokenValue');
            expect(setAuthenticatedMock).toHaveBeenCalledExactlyOnceWith(true);
            expect(lastNavigationPath).toEqual('/');
            jest.restoreAllMocks();
        });
    });

    describe('failure', () => {
        it('signup: network error', async () => {
            setLastNavigationPath('initial path');

            renderComponent(Signup, [signupMocks.networkError]);
            await submitForm();

            expect(setItemMock).not.toHaveBeenCalled();
            expect(lastNavigationPath).toEqual('initial path');
            expect(screen.queryByText(/SignupMutation: network error/)).toBeInTheDocument();
        });

        it('signup: GraphQL error', async () => {
            setLastNavigationPath('initial path');

            renderComponent(Signup, [signupMocks.graphQLError]);
            await submitForm();

            expect(setItemMock).not.toHaveBeenCalled();
            expect(lastNavigationPath).toEqual('initial path');
            expect(screen.queryByText(/SignupMutation: GraphQL error/)).toBeInTheDocument();
        });
    });
});
