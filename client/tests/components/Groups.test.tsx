import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';

import { Groups } from 'src/components/Groups';
import { LOADING_TEXT } from 'src/components/shared';
import { VALID } from 'tests/fixtures';
import { fetchGroupsMocks, joinGroupMocks } from 'tests/mocks/groupMocks';
import { fetchUserWithGroupsMocks, fetchUserWithoutGroupsMocks } from 'tests/mocks/userMocks';
import { oneTick, renderComponent } from 'tests/testHelpers';

describe('Groups', () => {
    it('snapshot: loading', () => {
        expect(renderComponent(Groups).container).toMatchSnapshot();
    });

    describe('success', () => {
        it('displays groups and supports joining a group', async () => {
            renderComponent(Groups, [
                fetchUserWithoutGroupsMocks.success,
                fetchGroupsMocks.success,
                joinGroupMocks.success,
                fetchUserWithGroupsMocks.success
            ]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText(VALID.GROUP.DESCRIPTION)).toBeInTheDocument();
            expect(screen.queryByText(VALID.GROUP.NAME)).toBeInTheDocument();

            const joinButton = screen.getAllByText('Join!')[0];
            fireEvent.click(joinButton);
            await oneTick();

            expect(screen.getAllByText('Joined').length).toBe(1);
        });
    });

    describe('failure', () => {
        it('fetchGroups: network error', async () => {
            renderComponent(Groups, [fetchGroupsMocks.networkError, fetchUserWithoutGroupsMocks.success]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText(/FetchGroupsQuery: network error/)).toBeInTheDocument();
        });

        it('fetchGroups: GraphQL error', async () => {
            renderComponent(Groups, [fetchGroupsMocks.graphQLError, fetchUserWithoutGroupsMocks.success]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText(/FetchGroupsQuery: GraphQL error/)).toBeInTheDocument();
        });

        it('joinGroup: network error', async () => {
            renderComponent(Groups, [
                fetchUserWithoutGroupsMocks.success,
                fetchGroupsMocks.success,
                joinGroupMocks.networkError,
                fetchUserWithoutGroupsMocks.success
            ]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            const joinButton = screen.getAllByText('Join!')[0];
            fireEvent.click(joinButton);
            await oneTick();

            expect(screen.queryByText(/JoinGroupMutation: network error/)).toBeInTheDocument();
        });

        it('joinGroup: GraphQL error', async () => {
            renderComponent(Groups, [
                fetchUserWithoutGroupsMocks.success,
                fetchGroupsMocks.success,
                joinGroupMocks.graphQLError,
                fetchUserWithoutGroupsMocks.success
            ]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            const joinButton = screen.getAllByText('Join!')[0];
            fireEvent.click(joinButton);
            await oneTick();

            expect(screen.queryByText(/JoinGroupMutation: GraphQL error/)).toBeInTheDocument();
        });
    });
});
