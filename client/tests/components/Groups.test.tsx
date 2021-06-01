import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';

import { Groups } from 'src/components/Groups';
import { LOADING_TEXT } from 'src/components/shared';
import { mockFetchGroups, mockFetchGroupsWithNetworkError, mockFetchUser, mockJoinGroup } from 'tests/mocks';
import { oneTick, renderComponent, renderComponentWithMocks } from 'tests/testHelpers';

describe('Groups', () => {
    describe('snapshots', () => {
        it('loading', () => {
            expect(renderComponent(Groups).container).toMatchSnapshot();
        });

        it('network error', async () => {
            const { container } = renderComponentWithMocks(Groups, [
                mockFetchGroupsWithNetworkError,
                mockFetchUser.userWithNoGroups
            ]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText('No results')).toBeNull();

            expect(container).toMatchSnapshot();
        });
    });

    describe('success', () => {
        it('display one group', async () => {
            renderComponentWithMocks(Groups, [mockFetchGroups, mockFetchUser.userWithNoGroups]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText('test-description')).toBeInTheDocument();
            expect(screen.queryByText('test-name')).toBeInTheDocument();
        });

        it('join group', async () => {
            renderComponentWithMocks(Groups, [
                mockFetchGroups,
                mockFetchUser.userWithNoGroups,
                mockJoinGroup.success,
                mockFetchUser.userWithOneGroup,
                mockFetchUser.userWithOneGroup
            ]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText('test-description')).toBeInTheDocument();
            expect(screen.queryByText('test-name')).toBeInTheDocument();

            const joinButton = screen.getByText('Join!');
            fireEvent.click(joinButton);
            await oneTick();
            await oneTick();

            expect(screen.queryByText('Joined')).toBeInTheDocument();
        });
    });

    describe('failure', () => {
        it('network error', async () => {
            renderComponentWithMocks(Groups, [
                mockFetchGroups,
                mockFetchUser.userWithNoGroups,
                mockJoinGroup.networkError,
                mockFetchUser.userWithOneGroup,
                mockFetchUser.userWithOneGroup
            ]);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText('test-description')).toBeInTheDocument();
            expect(screen.queryByText('test-name')).toBeInTheDocument();

            const joinButton = screen.getByText('Join!');
            fireEvent.click(joinButton);
            await oneTick();
            await oneTick();

            expect(screen.queryByText(/joinGroup: network-error/)).toBeInTheDocument();
        });
    });
});
