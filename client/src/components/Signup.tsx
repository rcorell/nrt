import { useMutation } from '@apollo/client';
import { navigate } from 'hookrouter';
import React, { useContext, useState } from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { SignupMutation, SignupMutationVariables } from 'src/api/__generated__/SignupMutation';
import { signupMutationString } from 'src/api/api';
import { GlobalContext } from 'src/components/GlobalContextProvider';
import { AppError, AppForm, FormContainer } from 'src/styles/form';
import { setBrowserTitle } from 'src/utils';

export const Signup: React.FC = () => {
    const { setAuthenticated } = useContext(GlobalContext);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [signup, { error }] = useMutation<SignupMutation, SignupMutationVariables>(signupMutationString, {
        onCompleted: ({ signup }) => {
            localStorage.setItem('token', signup!.token!);
            setAuthenticated(true);
            navigate('/');
        },
        onError: () => {
            // RTL bug
        },
        variables: { email, name, password }
    });

    setBrowserTitle('Sign Up');

    const isFormInvalid = () => {
        return email.length < 7 || name.length === 0 || password.length === 0;
    };

    const signupStatus = () => {
        if (error) {
            return <AppError>Error: {error.message}</AppError>;
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
