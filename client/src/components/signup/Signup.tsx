import * as React from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';
import { connect } from 'react-redux';

import { signup } from 'src/api/api';
import { history } from 'src/components/routes/Routes';
import { setBrowserTitle } from 'src/components/utils';
import { Path } from 'src/redux/navigation/types';
import * as loginActions from 'src/redux/login/actions';
import { AuthError, AuthForm, FormContainer } from 'src/styles';

interface SignupDispatchProps {
    authenticated: () => void;
}

export type SignupComponentProps = SignupDispatchProps;

interface SignupState {
    email: string;
    name: string;
    password: string;
}

export class SignupComponent extends React.Component<SignupComponentProps, SignupState> {
    public constructor(props: SignupComponentProps) {
        super(props);

        this.state = {
            email: '',
            name: '',
            password: ''
        };
    }

    componentDidMount() {
        setBrowserTitle('Sign Up');
    }

    isFormInvalid = () => {
        return this.state.email.length < 7 || this.state.name.length === 0 || this.state.password.length === 0;
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newState: SignupState = this.state;

        switch (event.target.id) {
            case 'email':
                newState.email = event.target.value;
                break;

            case 'name':
                newState.name = event.target.value;
                break;

            case 'password':
                newState.password = event.target.value;
                break;
        }
        this.setState(newState);
    };

    handleSubmit = (event: React.FormEvent<FormControlProps>) => {
        event.preventDefault();
        signup(this.state.email, this.state.name, this.state.password)
            .then(() => {
                this.props.authenticated();
                history.push(Path.HOME);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <FormContainer>
                <h1>Sign Up</h1>
                <AuthForm onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            id="email"
                            onChange={this.handleChange}
                            size="lg"
                            type="email"
                            value={this.state.email}
                            placeholder={'email'}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            autoFocus
                            id="name"
                            onChange={this.handleChange}
                            size="lg"
                            value={this.state.name}
                            placeholder={'name'}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            id="password"
                            onChange={this.handleChange}
                            size="lg"
                            type="password"
                            value={this.state.password}
                            placeholder={'password'}
                        />
                    </Form.Group>

                    <Button type="submit" disabled={this.isFormInvalid()}>
                        Sign Up
                    </Button>
                </AuthForm>
                <AuthError></AuthError>
            </FormContainer>
        );
    }
}

export const mapDispatchToProps = (dispatch: Function) => ({
    authenticated: () => dispatch(loginActions.authenticated())
});

export const Signup = connect(null, mapDispatchToProps)(SignupComponent);
