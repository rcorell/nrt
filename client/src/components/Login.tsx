import { useMutation } from '@apollo/client';
import { navigate } from 'hookrouter';
import React, { useContext, useState } from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { LoginMutation, LoginMutationVariables } from 'src/api/__generated__/LoginMutation';
import { loginMutation } from 'src/api/api';
import { GlobalContext } from 'src/components/GlobalContextProvider';
import { AppError, AppForm, FormContainer } from 'src/styles/form';
import { setBrowserTitle } from 'src/utils';

export const Login: React.FC = () => {
    const { setAuthenticated } = useContext(GlobalContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { error }] = useMutation<LoginMutation, LoginMutationVariables>(loginMutation, {
        onCompleted: (result) => {
            if (result?.login) {
                localStorage.setItem('token', result.login.token!);
                setAuthenticated(true);
                navigate('/');
            }
        },
        onError: () => {
            // https://github.com/apollographql/apollo-client/issues/7167
        },
        variables: { email, password }
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
            return <AppError>Error: {error.message}</AppError>;
        }

        return null;
    };

    return (
        <FormContainer>
            <h1>Login</h1>
            <AppForm onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label id="emailLabel">Email</Form.Label>
                    <Form.Control
                        aria-labelledby="emailLabel"
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
                    <Form.Label id="passwordLabel">Password</Form.Label>
                    <Form.Control
                        aria-labelledby="passwordLabel"
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
            </AppForm>
            <AppError>{authStatus()}</AppError>
        </FormContainer>
    );
};
