import * as React from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as loginActions from '../../redux/login/actions';
import { getIsAuthenticated, getLoginAttemptStatus } from '../../redux/login/selectors';
import { LoginAttemptStatus } from '../../redux/login/types';
import { State } from '../../redux/state.types';

import { LoginContainer, LoginError, LoginForm } from './styles';

interface LoginStateProps {
    authenticated: boolean;
    loginAttemptStatus: LoginAttemptStatus;
}

interface LoginDispatchProps {
    login: (email: string, password: string) => void;
}

export type LoginComponentProps = LoginStateProps & LoginDispatchProps;

interface LoginState {
    email: string;
    password: string;
}

export class LoginComponent extends React.Component<LoginComponentProps, LoginState> {
    public constructor(props: LoginComponentProps) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    isFormInvalid = () => {
        return this.state.email.length < '@fivestars.com'.length + 1 || this.state.password.length === 0;
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newState: LoginState = this.state;

        switch (event.target.id) {
            case 'email':
                newState.email = event.target.value;
                break;

            case 'password':
                newState.password = event.target.value;
                break;
        }
        this.setState(newState);
    };

    handleSubmit = (event: React.FormEvent<FormControlProps>) => {
        event.preventDefault();
        this.props.login(this.state.email, this.state.password);
    };

    render() {
        return (
            <LoginContainer>
                <h1>Login</h1>
                <LoginForm onSubmit={this.handleSubmit}>
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
                        Log In
                    </Button>
                </LoginForm>
                <LoginError>
                    {this.props.loginAttemptStatus === LoginAttemptStatus.FAILURE ? 'Login Failed' : ''}
                </LoginError>
            </LoginContainer>
        );
    }
}

export const mapStateToProps: (state: State) => LoginStateProps = (state: State) => ({
    authenticated: getIsAuthenticated(state),
    loginAttemptStatus: getLoginAttemptStatus(state)
});

export const mapDispatchToProps = (dispatch: Function) => ({
    login: (email: string, password: string) => dispatch(loginActions.login(email, password))
});

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
