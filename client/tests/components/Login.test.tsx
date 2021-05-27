// import * as React from 'react';
// import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { fireEvent, screen } from '@testing-library/react';

// import { loginMutationString } from 'src/api/api';
import { Login } from 'src/components/Login';

import { renderComponent } from 'tests/testHelpers';

describe('Login', () => {
    describe('snapshots', () => {
        let emailInput: HTMLElement;
        let loginContainer: HTMLElement;
        let passwordInput: HTMLElement;

        const renderLogin = () => {
            const loginRender = renderComponent(Login);

            emailInput = screen.getByLabelText('Email');
            passwordInput = screen.getByLabelText('Password');
            loginContainer = loginRender.container;
        };

        it('fresh page load', () => {
            global.expectComponentToMatchSnapshot(Login);
        });

        it('invalid parameters', () => {
            renderLogin();

            fireEvent.change(emailInput, { target: { value: 'a@a.a' } });
            fireEvent.change(passwordInput, { target: { value: 'a' } });

            expect(loginContainer).toMatchSnapshot();
        });

        it('valid parameters', () => {
            renderLogin();

            fireEvent.change(emailInput, { target: { value: 'totally@valid.email' } });
            fireEvent.change(passwordInput, { target: { value: 'qwerty1!' } });

            expect(loginContainer).toMatchSnapshot();
        });
    });
});
