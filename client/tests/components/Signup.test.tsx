import { fireEvent, screen } from '@testing-library/react';

import { Signup } from 'src/components/Signup';

import { INVALID, VALID } from 'tests/fixtures';
import { renderComponent } from 'tests/testHelpers';

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
});
