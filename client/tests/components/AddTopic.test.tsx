import { MockedResponse } from '@apollo/client/testing';
import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddTopic } from 'src/components/AddTopic';
import { LOADING_TEXT } from 'src/components/shared';
import { ADD_TOPIC, INVALID, VALID } from 'tests/fixtures';
import { mockGroups } from 'tests/mocks/groupMocks';
import { createTopicMocks } from 'tests/mocks/topicMocks';
import { fetchUserMocks } from 'tests/mocks/userMocks';
import { oneTick, renderComponent, setField, testFormSnapshots } from 'tests/testHelpers';

describe('AddTopic', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    testFormSnapshots(
        {
            component: AddTopic,
            fields: [
                {
                    invalidValue: INVALID.TOPIC.DESCRIPTION,
                    label: ADD_TOPIC.DESCRIPTION,
                    validValue: VALID.TOPIC.DESCRIPTION
                },
                { invalidValue: INVALID.TOPIC.TITLE, label: ADD_TOPIC.TITLE, validValue: VALID.TOPIC.TITLE }
            ],
            pageName: ADD_TOPIC.PAGE_NAME
        },
        [fetchUserMocks.success.withGroups]
    );

    const submitAddTopic = async (mocks: MockedResponse[]) => {
        const { container } = renderComponent(AddTopic, mocks);

        await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));
        userEvent.selectOptions(screen.getByLabelText('Group'), mockGroups[0].id);
        setField(ADD_TOPIC.TITLE, VALID.TOPIC.TITLE);
        setField(ADD_TOPIC.DESCRIPTION, VALID.TOPIC.DESCRIPTION);
        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);
        await oneTick();

        return container;
    };

    describe('success', () => {
        it('should create a topic', async () => {
            const container = await submitAddTopic([fetchUserMocks.success.withGroups, createTopicMocks.success]);

            expect(container).toMatchSnapshot();
            expect(createTopicMocks.success.newData).toHaveBeenCalledTimes(1);
        });
    });

    describe('failure', () => {
        it('createTopic: network error', async () => {
            const container = await submitAddTopic([
                fetchUserMocks.success.withGroups,
                createTopicMocks.networkError
            ]);

            expect(container).toMatchSnapshot();
            expect(screen.queryByText(/CreateTopicMutation: network error/)).toBeInTheDocument();
        });
    });
});
