import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { CreateTopicMutation, CreateTopicMutationVariables } from 'src/api/__generated__/CreateTopicMutation';
import { FetchUserQuery } from 'src/api/__generated__/FetchUserQuery';
import { createTopicMutationString, fetchUserQueryString } from 'src/api/api';
import { LOADING_TEXT } from 'src/components/shared';
import { AppError, AppForm, FormContainer } from 'src/styles/form';
import { setBrowserTitle } from 'src/utils';

export const AddTopic: React.FC = () => {
    const [description, setDescription] = useState('');
    const [groupId, setGroupId] = useState('');
    const [title, setTitle] = useState('');

    const userQuery = useQuery<FetchUserQuery>(fetchUserQueryString);

    const [createTopic, { error }] = useMutation<CreateTopicMutation, CreateTopicMutationVariables>(
        createTopicMutationString,
        {
            variables: { groupId, title, description },
            onError: () => {
                // RTL bug
            }
        }
    );

    const isFormInvalid = () => {
        return title.length < 1;
    };

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

    if (userQuery.loading || !userQuery.data) {
        return <div>{LOADING_TEXT}</div>;
    }

    const groupOptions = userQuery.data.user.groups.map((group) => (
        <option key={group!.id} value={group!.id}>
            {group!.name}
        </option>
    ));

    return (
        <FormContainer>
            <h1>Add Topic</h1>
            {errorStatus()}
            <AppForm onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label id="groupLabel">Group</Form.Label>
                    <Form.Control
                        as="select"
                        aria-labelledby="groupLabel"
                        id="group"
                        onChange={(e) => setGroupId(e.target.value)}
                        size="lg"
                    >
                        {groupOptions}
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label id="topicLabel">Topic</Form.Label>
                    <Form.Control
                        autoFocus
                        aria-labelledby="topicLabel"
                        id="topic"
                        onChange={(e) => setTitle(e.target.value)}
                        size="lg"
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
