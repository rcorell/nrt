import * as React from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';
import { connect } from 'react-redux';

import { State } from '../../redux/state.types';
import * as signupActions from '../../redux/signup/actions';

import { FormContainer, AuthError, AuthForm } from '../../styles';

interface SignupStateProps {
}

interface SignupDispatchProps {
    signup: (email: string, name: string, password: string) => void;
}

export type SignupComponentProps = SignupStateProps & SignupDispatchProps;

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
        document.title = 'Sign Up';
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
        this.props.signup(this.state.email, this.state.name, this.state.password);
    };

    render() {
        return (
            <FormContainer>
                <h1>Signup</h1>
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
                            type="name"
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
                        Log In
                    </Button>
                </AuthForm>
                <AuthError>
                </AuthError>
            </FormContainer>
        );
    }
}

export const mapStateToProps: (state: State) => SignupStateProps = (state: State) => ({
});

export const mapDispatchToProps = (dispatch: Function) => ({
    signup: (email: string, name: string, password: string) => dispatch(signupActions.signup(email, name, password))
});

export const Signup = connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
