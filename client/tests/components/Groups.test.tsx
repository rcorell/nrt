import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';

import { Groups } from 'src/components/Groups';
import { LOADING_TEXT } from 'src/components/shared';
import { VALID } from 'tests/fixtures';
import { fetchGroupsMocks, joinGroupMocks } from 'tests/mocks/groupMocks';
import { fetchUserMocks } from 'tests/mocks/userMocks';
import { oneTick, renderComponent } from 'tests/testHelpers';

describe('Groups', () => {
    it('snapshot: loading', () => {
        expect(renderComponent(Groups).container).toMatchSnapshot();
    });

    describe('success', () => {
        it('displays groups and supports joining a group', async () => {
            renderComponent(Groups, [
                fetchUserMocks.success.withoutGroups,
                fetchGroupsMocks.success,
                joinGroupMocks.success,
                fetchUserMocks.success.withGroups
            ]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText(VALID.GROUP.DESCRIPTION)).toBeInTheDocument();
            expect(screen.queryByText(VALID.GROUP.NAME)).toBeInTheDocument();
            const joinButton = screen.getAllByText('Join!')[0];
            fireEvent.click(joinButton);
            await oneTick();
            expect(screen.getAllByText(/Joined/).length).toBe(2);
        });
    });

    describe('failure', () => {
        it('fetchGroups: network error', async () => {
            renderComponent(Groups, [fetchGroupsMocks.networkError, fetchUserMocks.success.withoutGroups]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText(/fetchGroups: network error/)).toBeInTheDocument();
        });

        it('fetchGroups: GraphQL error', async () => {
            renderComponent(Groups, [fetchGroupsMocks.graphQLError, fetchUserMocks.success.withoutGroups]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText(/fetchGroups: GraphQL error/)).toBeInTheDocument();
        });

        it('joinGroup: network error', async () => {
            renderComponent(Groups, [
                fetchUserMocks.success.withoutGroups,
                fetchGroupsMocks.success,
                joinGroupMocks.networkError,
                fetchUserMocks.success.withoutGroups
            ]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            const joinButton = screen.getAllByText('Join!')[0];
            fireEvent.click(joinButton);
            await oneTick();

            expect(screen.queryByText(/joinGroup: network error/)).toBeInTheDocument();
        });

        it('joinGroup: GraphQL error', async () => {
            renderComponent(Groups, [
                fetchUserMocks.success.withoutGroups,
                fetchGroupsMocks.success,
                joinGroupMocks.graphQLError,
                fetchUserMocks.success.withoutGroups
            ]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            const joinButton = screen.getAllByText('Join!')[0];
            fireEvent.click(joinButton);
            await oneTick();

            expect(screen.queryByText(/joinGroup: GraphQL error/)).toBeInTheDocument();
        });
    });
});
