import React, { useState } from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

import { AppError, AppForm, FormContainer } from 'src/styles/form';
import { setBrowserTitle } from 'src/utils';

import { useAddGroup } from './AddGroup.hook';

export const AddGroup: React.FC = () => {
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');

    const addGroupHook = useAddGroup();

    const isFormInvalid = () => {
        return name.length < 1;
    };

    const handleSubmit = (event: React.FormEvent<FormControlProps>) => {
        event.preventDefault();

        addGroupHook.addGroup(name, description);
    };

    const errorDisplay = () => {
        if (addGroupHook.error) {
            return <div>Error: {JSON.stringify(addGroupHook.error)}</div>;
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
