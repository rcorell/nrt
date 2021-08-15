import { MockedResponse } from '@apollo/client/testing';
import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddTopic } from 'src/components/AddTopic/AddTopic';
import { Path } from 'src/components/Routes';
import { LOADING_TEXT } from 'src/components/shared';
import { ADD_TOPIC, INVALID, VALID } from 'tests/fixtures';
import { mockGroups } from 'tests/mocks/groupMocks';
import { fetchUserWithGroupsMocks, fetchUserWithoutGroupsMocks } from 'tests/mocks/userMocks';
import { lastNavigationPath, oneTick, renderComponent, setField, testFormSnapshots } from 'tests/testHelpers';

import { createTopicMocks } from './Topics/Topics.mocks';

describe('AddTopic', () => {
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
        [fetchUserWithGroupsMocks.success]
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
        describe('with groups', () => {
            it('should create a topic and navigate to the topics page', async () => {
                const container = await submitAddTopic([
                    fetchUserWithGroupsMocks.success,
                    createTopicMocks.success
                ]);

                expect(container).toMatchSnapshot();
                expect(createTopicMocks.success.newData).toHaveBeenCalledTimes(1);
                expect(lastNavigationPath).toEqual(Path.TOPICS);
            });
        });

        describe('without groups', () => {
            it('should show a helpful message', async () => {
                const { container } = renderComponent(AddTopic, [fetchUserWithoutGroupsMocks.success]);

                await oneTick();

                expect(container).toMatchSnapshot();
            });
        });
    });

    describe('failure', () => {
        it('createTopic: network error', async () => {
            const container = await submitAddTopic([
                fetchUserWithGroupsMocks.success,
                createTopicMocks.networkError
            ]);

            expect(container).toMatchSnapshot();
            expect(screen.queryByText(/CreateTopic: network error/)).toBeInTheDocument();
        });

        it('createTopic: GraphQL error', async () => {
            const container = await submitAddTopic([
                fetchUserWithGroupsMocks.success,
                createTopicMocks.graphQLError
            ]);

            expect(container).toMatchSnapshot();
            expect(screen.queryByText(/CreateTopic: GraphQL error/)).toBeInTheDocument();
        });
    });
});
