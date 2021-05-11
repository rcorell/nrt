import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { addGroup } from 'src/api/api';
import { setBrowserTitle } from 'src/components/utils';
import { AuthError, AuthForm, FormContainer } from 'src/styles';

interface AddGroupState {
    description: string;
    name: string;
}

export class AddGroupComponent extends React.Component<{}, AddGroupState> {
    public constructor(props = {}) {
        super(props);
        this.state = {
            description: '',
            name: ''
        };
    }

    componentDidMount() {
        setBrowserTitle('Add Group');
    }

    isFormInvalid() {
        return this.state.name.length < 1;
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newState: AddGroupState = this.state;

        switch (event.target.id) {
            case 'name':
                newState.name = event.target.value;
                break;

            case 'description':
                newState.description = event.target.value;
                break;
        }
        this.setState(newState);
    };

    handleSubmit = (event: React.FormEvent<FormControlProps>) => {
        event.preventDefault();
        addGroup(this.state.name, this.state.description).then(() => {
            console.log('Group added');
        });
    };

    render() {
        return (
            <FormContainer>
                <h1>Add Group</h1>
                <AuthForm onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            autoFocus
                            id="name"
                            onChange={this.handleChange}
                            size="lg"
                            value={this.state.name}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            id="description"
                            onChange={this.handleChange}
                            size="lg"
                            value={this.state.description}
                        />
                    </Form.Group>

                    <Button type="submit" disabled={this.isFormInvalid()}>
                        Add Group
                    </Button>
                </AuthForm>
                <AuthError></AuthError>
            </FormContainer>
        );
    }
}

export const AddGroup = connect()(AddGroupComponent);
