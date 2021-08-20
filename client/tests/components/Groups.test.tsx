import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';

import { Groups } from 'src/components/Groups/Groups';
import { LOADING_TEXT } from 'src/components/shared';
import { VALID } from 'tests/fixtures';
import { fetchGroupsMocks, joinGroupMocks } from 'tests/mocks/groupMocks';
import { fetchUserWithGroupIdsMocks, fetchUserWithoutGroupIdsMocks } from 'tests/mocks/userMocks';
import { oneTick, renderComponent } from 'tests/testHelpers';

describe('Groups', () => {
    it('snapshot: loading', () => {
        expect(renderComponent(Groups).container).toMatchSnapshot();
    });

    describe('success', () => {
        it('displays groups and supports joining a group', async () => {
            renderComponent(Groups, [
                fetchUserWithoutGroupIdsMocks.success,
                fetchGroupsMocks.success,
                joinGroupMocks.success,
                fetchUserWithGroupIdsMocks.success
            ]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));
            expect(screen.queryByText(VALID.GROUP.DESCRIPTION)).toBeInTheDocument();
            expect(screen.queryByText(VALID.GROUP.NAME)).toBeInTheDocument();
        });
    });

    describe('failure', () => {
        it('fetchGroups: network error', async () => {
            renderComponent(Groups, [fetchGroupsMocks.networkError, fetchUserWithoutGroupIdsMocks.success]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText(/FetchGroups: network error/)).toBeInTheDocument();
        });

        it('fetchGroups: GraphQL error', async () => {
            renderComponent(Groups, [fetchGroupsMocks.graphQLError, fetchUserWithoutGroupIdsMocks.success]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText(/FetchGroups: GraphQL error/)).toBeInTheDocument();
        });

        it('joinGroup: GraphQL error', async () => {
            renderComponent(Groups, [
                fetchGroupsMocks.success,
                joinGroupMocks.graphQLError,
                fetchUserWithGroupIdsMocks.success
            ]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            const joinButton = screen.getAllByText('Join!')[0];
            fireEvent.click(joinButton);
            await oneTick();

            expect(screen.queryByText(/JoinGroup: GraphQL error/)).toBeInTheDocument();
        });

        it('joinGroup: network error', async () => {
            renderComponent(Groups, [
                fetchGroupsMocks.success,
                joinGroupMocks.networkError,
                fetchUserWithGroupIdsMocks.success
            ]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            const joinButton = screen.getAllByText('Join!')[0];
            fireEvent.click(joinButton);
            await oneTick();

            expect(screen.queryByText(/JoinGroup: network error/)).toBeInTheDocument();
        });
    });
});
