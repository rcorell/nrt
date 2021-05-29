import { fireEvent, screen } from '@testing-library/react';

import { createTopicMutationString } from 'src/api/api';
import { AddTopic } from 'src/components/AddTopic';

import { ADD_TOPIC, INVALID, VALID } from 'tests/fixtures';
import { oneTick, renderComponent, setField, testFormSnapshots } from 'tests/testHelpers';

describe('AddGroup', () => {
    testFormSnapshots({
        component: AddTopic,
        fields: [
            {
                label: ADD_TOPIC.DESCRIPTION,
                validValue: VALID.GROUP.DESCRIPTION,
                invalidValue: INVALID.GROUP.DESCRIPTION
            },
            { label: ADD_TOPIC.TITLE, validValue: VALID.TOPIC.TITLE, invalidValue: INVALID.TOPIC.TITLE }
        ],
        pageName: ADD_TOPIC.PAGE_NAME
    });

    const submitAddTopic = async () => {
        setField(ADD_TOPIC.TITLE, VALID.TOPIC.TITLE);
        setField(ADD_TOPIC.DESCRIPTION, VALID.TOPIC.DESCRIPTION);
        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);
        await oneTick();
    };

    describe('success', () => {
        it('should create a topic', async () => {
            renderComponent(
                AddTopic,
                createTopicMutationString,
                { title: VALID.TOPIC.TITLE, description: VALID.TOPIC.DESCRIPTION },
                {
                    data: { createTopic: { id: '777' } }
                }
            );
            await submitAddTopic();

            expect(true);
        });
    });

    describe('failure', () => {
        it('failed topic creation: should display error message', async () => {
            renderComponent(
                AddTopic,
                createTopicMutationString,
                { title: VALID.TOPIC.TITLE, description: VALID.TOPIC.DESCRIPTION },
                {
                    error: new Error('AddTopic failure')
                }
            );
            await submitAddTopic();

            expect(screen.queryByText(/AddTopic failure/)).toBeInTheDocument();
        });
    });
});
