import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { setBrowserTitle } from 'src/components/utils';
import * as addGroupActions from 'src/redux/addGroup/actions';
import { State } from 'src/redux/state.types';
import { AuthError, AuthForm, FormContainer } from 'src/styles';

interface AddGroupDispatchProps {
    addGroup: (name: string, description: string) => void;
}

interface AddGroupState {
    description: string;
    name: string;
}

export class AddGroupComponent extends React.Component<AddGroupDispatchProps, AddGroupState> {
    public constructor(props: AddGroupDispatchProps) {
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
        this.props.addGroup(this.state.name, this.state.description);
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

export const mapStateToProps = (_state: State) => ({});

export const mapDispatchToProps = (dispatch: Function) => ({
    addGroup: (name: string, description: string) => dispatch(addGroupActions.addGroup(name, description))
});

export const AddGroup = connect(mapStateToProps, mapDispatchToProps)(AddGroupComponent);
