import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { addTopic } from 'src/api/api';
import { setBrowserTitle } from 'src/components/utils';
import * as addTopicActions from 'src/redux/addTopic/actions';
import { State } from 'src/redux/state.types';
import { AuthError, AuthForm, FormContainer } from 'src/styles';

interface AddTopicDispatchProps {
    addTopic: (topic: string) => void;
}

interface AddTopicState {
    topic: string;
}

export class AddTopicComponent extends React.Component<AddTopicDispatchProps, AddTopicState> {
    public constructor(props: AddTopicDispatchProps) {
        super(props);
        this.state = {
            topic: ''
        };
    }

    componentDidMount() {
        setBrowserTitle('Add Topic');
    }

    isFormInvalid() {
        return this.state.topic.length < 1;
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newState: AddTopicState = this.state;

        switch (event.target.id) {
            case 'topic':
                newState.topic = event.target.value;
                break;
        }
        this.setState(newState);
    };

    handleSubmit = (event: React.FormEvent<FormControlProps>) => {
        event.preventDefault();
        addTopic(this.state.topic);
    };

    render() {
        return (
            <FormContainer>
                <h1>Add Topic</h1>
                <AuthForm onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Topic</Form.Label>
                        <Form.Control
                            autoFocus
                            id="topic"
                            onChange={this.handleChange}
                            size="lg"
                            type="topic"
                            value={this.state.topic}
                        />
                    </Form.Group>

                    <Button type="submit" disabled={this.isFormInvalid()}>
                        Submit Topic
                    </Button>
                </AuthForm>
                <AuthError></AuthError>
            </FormContainer>
        );
    }
}

export const mapStateToProps = (_state: State) => ({});

export const mapDispatchToProps = (dispatch: Function) => ({
    addTopic: (topic: string) => dispatch(addTopicActions.addTopic(topic))
});

export const AddTopic = connect(mapStateToProps, mapDispatchToProps)(AddTopicComponent);
