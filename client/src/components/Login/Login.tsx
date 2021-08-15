import React, { useState } from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { AppError, AppForm, FormContainer } from 'src/styles/form';
import { setBrowserTitle } from 'src/utils';

import { useLogin } from './Login.hook';

export const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHook = useLogin();

    setBrowserTitle('Login');

    const isFormInvalid = () => {
        return email.length < 7 || password.length === 0;
    };

    const handleSubmit = (event: React.FormEvent<FormControlProps>) => {
        event.preventDefault();

        loginHook.login(email, password);
    };

    const authStatus = () => {
        if (loginHook.error) {
            return <AppError>Error: {loginHook.error.message}</AppError>;
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
