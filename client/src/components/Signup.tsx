import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { signupMutationString } from 'src/api/api';
import { history } from 'src/components/Routes';
import { SignupMutation, SignupMutationVariables } from 'src/api/__generated__/SignupMutation';
import { setBrowserTitle } from 'src/utils';
import { AuthError, AuthForm, FormContainer } from 'src/styles';

export const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [signup, { error }] = useMutation<SignupMutation, SignupMutationVariables>(signupMutationString, {
        variables: { email, name, password },
        onCompleted: ({ signup }) => {
            if (signup?.token) {
                console.log(signup);
                localStorage.setItem('token', signup.token);
                history.push('/');
            }
        }
    });

    setBrowserTitle('Sign Up');

    const isFormInvalid = () => {
        return email.length < 7 || name.length === 0 || password.length === 0;
    };

    const signupStatus = () => {
        if (error) {
            return <AuthError>Error: {error.message}</AuthError>;
        }

        return null;
    };

    const handleSubmit = (event: React.FormEvent<FormControlProps>) => {
        event.preventDefault();

        signup();
    };

    return (
        <FormContainer>
            <h1>Sign Up</h1>
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
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        autoFocus
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        size="lg"
                        value={name}
                        placeholder={'name'}
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
                    Sign Up
                </Button>
            </AuthForm>
            <AuthError>{signupStatus()}</AuthError>
        </FormContainer>
    );
};
