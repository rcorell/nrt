import React, { useState } from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { LOADING_TEXT } from 'src/components/shared';
import { AppError, AppForm, FormContainer } from 'src/styles/form';
import { setBrowserTitle } from 'src/utils';

import { useUserWithGroupTopics } from '../Home/Home.hook';
import { useAddTopic } from './AddTopic.hook';

export const AddTopic: React.FC = () => {
    const [description, setDescription] = useState('');
    const [groupId, setGroupId] = useState('');
    const [title, setTitle] = useState('');

    const userHook = useUserWithGroupTopics();

    const addTopicHook = useAddTopic();

    const isFormInvalid = () => {
        return title.length < 1;
    };

    const handleSubmit = (event: React.FormEvent<FormControlProps>) => {
        event.preventDefault();

        addTopicHook.addTopic(groupId, title, description);
    };

    const errorStatus = () => {
        if (addTopicHook.error) {
            return <div>Error: ${JSON.stringify(addTopicHook.error)}</div>;
        }

        return null;
    };

    setBrowserTitle('Add Topic');

    if (userHook.loading || !userHook.user) {
        return <div>{LOADING_TEXT}</div>;
    }

    if (userHook.user.groups.length === 0) {
        return <div>You must join a group to add topics.</div>;
    }

    const groupOptions = userHook.user.groups.map((group) => (
        <option key={group!.id} value={group!.id}>
            {group!.name}
        </option>
    ));

    if (groupId === '') {
        setGroupId(userHook.user.groups[0]!.id);
    }

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
                        defaultValue={groupId}
                        id="group"
                        onChange={(e) => {
                            setGroupId(e.target.value);
                        }}
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
