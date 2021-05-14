import * as React from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';
import { connect } from 'react-redux';

import { setBrowserTitle } from 'src/components/utils';
import * as loginActions from 'src/redux/login/actions';
import { LoginAttemptStatus } from 'src/redux/login/types';
import { AuthError, AuthForm, FormContainer } from 'src/styles';

interface LoginDispatchProps {
    authenticated: () => void;
}

export type LoginComponentProps = LoginDispatchProps;

interface LoginState {
    email: string;
    password: string;
    loginAttemptStatus: LoginAttemptStatus;
}

export class LoginComponent extends React.Component<LoginComponentProps, LoginState> {
    public constructor(props: LoginComponentProps) {
        super(props);
        this.state = {
            email: '',
            loginAttemptStatus: LoginAttemptStatus.NOT_ATTEMPTED,
            password: ''
        };
    }

    componentDidMount() {
        setBrowserTitle('Login');
    }

    isFormInvalid = () => {
        return this.state.email.length < 7 || this.state.password.length === 0;
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
        this.setState({ loginAttemptStatus: LoginAttemptStatus.IN_PROGRESS });
        // login(this.state.email, this.state.password)
        //     .then(() => {
        //         this.setState({ loginAttemptStatus: LoginAttemptStatus.SUCCESS });
        //         this.props.authenticated();
        //     })
        //     .catch(() => {
        //         this.setState({ loginAttemptStatus: LoginAttemptStatus.FAILURE });
        //     });
    };

    authStatus = () => {
        switch (this.state.loginAttemptStatus) {
            case LoginAttemptStatus.IN_PROGRESS:
                return 'Attempting login...';
            case LoginAttemptStatus.FAILURE:
                return 'Login failed';
        }

        return '';
    };

    render() {
        return (
            <FormContainer>
                <h1>Login</h1>
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
                </AuthForm>
                <AuthError>{this.authStatus()}</AuthError>
            </FormContainer>
        );
    }
}

export const mapDispatchToProps = (dispatch: Function) => ({
    authenticated: () => dispatch(loginActions.authenticated())
});

export const Login = connect(null, mapDispatchToProps)(LoginComponent);
