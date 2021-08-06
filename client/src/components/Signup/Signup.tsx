import React, { useState } from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { AppError, AppForm, FormContainer } from 'src/styles/form';
import { setBrowserTitle } from 'src/utils';
import { useSignup } from './Signup.hook';

export const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const signupHook = useSignup();

    setBrowserTitle('Sign Up');

    const isFormInvalid = () => {
        return email.length < 7 || name.length === 0 || password.length === 0;
    };

    const signupStatus = () => {
        if (signupHook.error) {
            return <AppError>Error: {signupHook.error.message}</AppError>;
        }

        return null;
    };

    const handleSubmit = (event: React.FormEvent<FormControlProps>) => {
        event.preventDefault();

        signupHook.signup(email, name, password);
    };

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            <AppForm onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label id="emailLabel">Email</Form.Label>
                    <Form.Control
                        autoFocus
                        aria-labelledby="emailLabel"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        size="lg"
                        type="email"
                        value={email}
                        placeholder={'email'}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label id="nameLabel">Name</Form.Label>
                    <Form.Control
                        autoFocus
                        aria-labelledby="nameLabel"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        size="lg"
                        value={name}
                        placeholder={'name'}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label id="passwordLabel">Password</Form.Label>
                    <Form.Control
                        id="password"
                        aria-labelledby="passwordLabel"
                        onChange={(e) => setPassword(e.target.value)}
                        size="lg"
                        type="password"
                        value={password}
                        placeholder={'password'}
                    />
                </Form.Group>

                <Button type="submit" disabled={isFormInvalid()}>
                    Sign Up
                </Button>
            </AppForm>
            <AppError>{signupStatus()}</AppError>
        </FormContainer>
    );
};
