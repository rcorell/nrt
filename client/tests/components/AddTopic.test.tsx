import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddTopic } from 'src/components/AddTopic';
import { LOADING_TEXT } from 'src/components/shared';
import { ADD_TOPIC, INVALID, VALID } from 'tests/fixtures';
import { mockCreateTopic, mockFetchUser } from 'tests/mocks';
import { oneTick, renderComponent, renderComponentWithMocks, setField } from 'tests/testHelpers';

describe('AddTopic', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('snapshots', () => {
        it('fresh load', () => {
            expect(renderComponent(AddTopic).container).toMatchSnapshot();
        });

        it('invalid parameters', async () => {
            const { container } = renderComponentWithMocks(AddTopic, [mockFetchUser.userWithOneGroup]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            setField(ADD_TOPIC.DESCRIPTION, INVALID.TOPIC.DESCRIPTION);
            setField(ADD_TOPIC.TITLE, INVALID.TOPIC.TITLE);

            expect(container).toMatchSnapshot();
        });

        it('valid parameters', async () => {
            const { container } = renderComponentWithMocks(AddTopic, [mockFetchUser.userWithOneGroup]);

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
        userEvent.selectOptions(screen.getByLabelText('Group'), '42');
        setField(ADD_TOPIC.TITLE, VALID.TOPIC.TITLE);
        setField(ADD_TOPIC.DESCRIPTION, VALID.TOPIC.DESCRIPTION);
        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);
        await oneTick();
    };

    describe('success', () => {
        it('should create a topic', async () => {
            const { container } = renderComponentWithMocks(AddTopic, [
                mockFetchUser.userWithOneGroup,
                mockCreateTopic.success
            ]);

            await submitAddTopic();

            expect(container).toMatchSnapshot();
            expect(mockCreateTopic.success.newData).toHaveBeenCalledTimes(1);
        });
    });

    describe('failure', () => {
        it('failed topic creation: should display error message', async () => {
            const { container } = renderComponentWithMocks(AddTopic, [
                mockFetchUser.userWithOneGroup,
                mockCreateTopic.networkError
            ]);

            await submitAddTopic();

            expect(container).toMatchSnapshot();
            expect(mockCreateTopic.networkError.newData).toHaveBeenCalledTimes(1);
            expect(screen.queryByText(/createTopic: network-error/)).toBeInTheDocument();
        });
    });
});
