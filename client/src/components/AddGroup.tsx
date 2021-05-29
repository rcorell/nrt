import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { createGroupMutationString } from 'src/api/api';
import { CreateGroupMutation, CreateGroupMutationVariables } from 'src/api/__generated__/CreateGroupMutation';
import { setBrowserTitle } from 'src/utils';
import { AppError, AppForm, FormContainer } from 'src/styles/form';

export const AddGroup: React.FC = () => {
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');

    const [createGroup, { error }] = useMutation<CreateGroupMutation, CreateGroupMutationVariables>(
        createGroupMutationString,
        {
            variables: { description, name },
            onCompleted: ({ createGroup }) => {
                createGroup.id += 0;
            },
            onError: () => {
                // RTL bug
            }
        }
    );

    const isFormInvalid = () => {
        return name.length < 1;
    };

    const handleSubmit = (event: React.FormEvent<FormControlProps>) => {
        event.preventDefault();

        createGroup();
    };

    const errorDisplay = () => {
        if (error) {
            return <div>Error: {JSON.stringify(error)}</div>;
        }

        return null;
    };

    setBrowserTitle('Add Group');

    return (
        <FormContainer>
            <h1>Add Group</h1>
            {errorDisplay()}
            <AppForm onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label id="nameLabel">Name</Form.Label>
                    <Form.Control
                        autoFocus
                        aria-labelledby="nameLabel"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        size="lg"
                        value={name}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label id="descriptionLabel">Description</Form.Label>
                    <Form.Control
                        id="description"
                        aria-labelledby="descriptionLabel"
                        onChange={(e) => setDescription(e.target.value)}
                        size="lg"
                        value={description}
                    />
                </Form.Group>

                <Button type="submit" disabled={isFormInvalid()}>
                    Add Group
                </Button>
            </AppForm>
            <AppError></AppError>
        </FormContainer>
    );
};
