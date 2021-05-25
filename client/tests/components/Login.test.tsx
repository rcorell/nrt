import * as React from 'react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { fireEvent, render, screen } from '@testing-library/react';

import { loginMutationString } from 'src/api/api';
import { Login } from 'src/components/Login';

describe('Login', () => {
    describe('snapshots', () => {
        let emailInput: HTMLElement;
        let loginContainer: HTMLElement;
        let passwordInput: HTMLElement;

        const renderLogin = (results: any = null) => {
            const mocks: MockedResponse[] = [
                {
                    request: {
                        query: loginMutationString,
                        variables: {}
                    }
                }
            ];

            if (results?.data) {
                mocks[0].result = {
                    data: results.data
                };
            } else if (results?.error) {
                mocks[0].error = results.error;
            }

            const { container } = render(
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Login />
                </MockedProvider>
            );
            emailInput = screen.getByLabelText('Email');
            passwordInput = screen.getByLabelText('Password');

            loginContainer = container;
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
