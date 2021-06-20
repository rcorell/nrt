import { ApolloError, useMutation } from '@apollo/client';
import { navigate } from 'hookrouter';
import React, { useState } from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { CreateGroupMutation, CreateGroupMutationVariables } from 'src/api/__generated__/CreateGroupMutation';
import { createGroupMutation } from 'src/api/api';
import { Path } from 'src/components/Routes';
import { AppError, AppForm, FormContainer } from 'src/styles/form';
import { setBrowserTitle } from 'src/utils';

export const AddGroup: React.FC = () => {
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [graphQLError, setGraphQLError] = useState(null as null | ApolloError);

    const [createGroup, { error }] = useMutation<CreateGroupMutation, CreateGroupMutationVariables>(
        createGroupMutation,
        {
            onCompleted: () => {
                navigate(Path.GROUPS);
            },
            onError: (error) => {
                setGraphQLError(error);
            },
            variables: { description, name }
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
        if (error || graphQLError) {
            return <div>Error: {JSON.stringify(error) + JSON.stringify(graphQLError)}</div>;
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
