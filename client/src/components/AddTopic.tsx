import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { CreateTopicMutation, CreateTopicMutationVariables } from 'src/api/__generated__/CreateTopicMutation';
import { createTopicMutationString } from 'src/api/api';

import { AppError, AppForm, FormContainer } from 'src/styles/form';
import { setBrowserTitle } from 'src/utils';

export const AddTopic: React.FC = () => {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    const isFormInvalid = () => {
        return title.length < 1;
    };

    const [createTopic, { error }] = useMutation<CreateTopicMutation, CreateTopicMutationVariables>(
        createTopicMutationString,
        {
            variables: { title, description },
            onCompleted: ({ createTopic }) => {
                createTopic.id += 0;
            },
            onError: () => {
                // RTL bug
            }
        }
    );

    const handleSubmit = (event: React.FormEvent<FormControlProps>) => {
        event.preventDefault();

        createTopic();
    };

    const errorStatus = () => {
        if (error) {
            return <div>Error: ${JSON.stringify(error)}</div>;
        }

        return null;
    };

    setBrowserTitle('Add Topic');

    return (
        <FormContainer>
            <h1>Add Topic</h1>
            {errorStatus()}
            <AppForm onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label id="topicLabel">Topic</Form.Label>
                    <Form.Control
                        autoFocus
                        aria-labelledby="topicLabel"
                        id="topic"
                        onChange={(e) => setTitle(e.target.value)}
                        size="lg"
                        type="topic"
                        value={title}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label id="descriptionLabel">Description</Form.Label>
                    <Form.Control
                        id="description"
                        aria-labelledby="descriptionLabel"
                        onChange={(e) => setDescription(e.target.value)}
                        size="lg"
                        type="topic"
                        value={description}
                    />
                </Form.Group>

                <Button type="submit" disabled={isFormInvalid()}>
                    Submit Topic
                </Button>
            </AppForm>
            <AppError></AppError>
        </FormContainer>
    );
};
