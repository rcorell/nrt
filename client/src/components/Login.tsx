import { useMutation } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { GlobalContext } from 'src/components/GlobalContextProvider';
import { loginMutationString } from 'src/api/api';
import { history } from 'src/components/Routes';
import { LoginMutation, LoginMutationVariables } from 'src/api/__generated__/LoginMutation';
import { setBrowserTitle } from 'src/utils';
import { AuthError, AuthForm, FormContainer } from 'src/styles';

export const Login: React.FC = () => {
    const { setAuthenticated } = useContext(GlobalContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { error }] = useMutation<LoginMutation, LoginMutationVariables>(loginMutationString, {
        variables: { email, password },
        onCompleted: ({ login }) => {
            if (login?.token) {
                localStorage.setItem('token', login.token);
                setAuthenticated(true);
                history.push('/');
            }
        }
    });

    setBrowserTitle('Login');

    const isFormInvalid = () => {
        return email.length < 7 || password.length === 0;
    };

    const handleSubmit = (event: React.FormEvent<FormControlProps>) => {
        event.preventDefault();

        login();
    };

    const authStatus = () => {
        if (error) {
            return <AuthError>Error: {error.message}</AuthError>;
        }

        return null;
    };

    return (
        <FormContainer>
            <h1>Login</h1>
            <AuthForm onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        size="lg"
                        type="email"
                        value={email}
                        placeholder={'email'}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        size="lg"
                        type="password"
                        value={password}
                        placeholder={'password'}
                    />
                </Form.Group>

                <Button type="submit" disabled={isFormInvalid()}>
                    Log In
                </Button>
            </AuthForm>
            <AuthError>{authStatus()}</AuthError>
        </FormContainer>
    );
};
