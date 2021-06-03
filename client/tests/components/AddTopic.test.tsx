import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddTopic } from 'src/components/AddTopic';
import { LOADING_TEXT } from 'src/components/shared';
import { ADD_TOPIC, INVALID, VALID } from 'tests/fixtures';
import { createTopicMocks } from 'tests/mocks/topicMocks';
import { fetchUserMocks } from 'tests/mocks/userMocks';
import { oneTick, renderComponent, setField } from 'tests/testHelpers';

describe('AddTopic', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('snapshots', () => {
        it('fresh load', () => {
            expect(renderComponent(AddTopic).container).toMatchSnapshot();
        });

        it('invalid parameters', async () => {
            const { container } = renderComponent(AddTopic, [fetchUserMocks.success.withGroups]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            setField(ADD_TOPIC.DESCRIPTION, INVALID.TOPIC.DESCRIPTION);
            setField(ADD_TOPIC.TITLE, INVALID.TOPIC.TITLE);

            expect(container).toMatchSnapshot();
        });

        it('valid parameters', async () => {
            const { container } = renderComponent(AddTopic, [fetchUserMocks.success.withGroups]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            setField(ADD_TOPIC.DESCRIPTION, VALID.TOPIC.DESCRIPTION);
            setField(ADD_TOPIC.TITLE, VALID.TOPIC.TITLE);

            expect(container).toMatchSnapshot();
        });
    });

    it('should have the correct document title', () => {
        expect(window.document.title).toEqual(`Top 5 Daily | Add Topic`);
    });

    const submitAddTopic = async () => {
        await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));
        userEvent.selectOptions(screen.getByLabelText('Group'), '40');
        setField(ADD_TOPIC.TITLE, VALID.TOPIC.TITLE);
        setField(ADD_TOPIC.DESCRIPTION, VALID.TOPIC.DESCRIPTION);
        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);
        await oneTick();
    };

    describe('success', () => {
        it('should create a topic', async () => {
            const { container } = renderComponent(AddTopic, [
                fetchUserMocks.success.withGroups,
                createTopicMocks.success
            ]);

            await submitAddTopic();

            expect(container).toMatchSnapshot();
            expect(createTopicMocks.success.newData).toHaveBeenCalledTimes(1);
        });
    });

    describe('failure', () => {
        it('createTopic: network error', async () => {
            const { container } = renderComponent(AddTopic, [
                fetchUserMocks.success.withGroups,
                createTopicMocks.networkError
            ]);

            await submitAddTopic();

            expect(container).toMatchSnapshot();
            expect(createTopicMocks.networkError.newData).toHaveBeenCalledTimes(1);
            expect(screen.queryByText(/createTopic: network error/)).toBeInTheDocument();
        });
    });
});
