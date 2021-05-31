import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';

import { fetchGroupsQueryString, fetchUserQueryString, joinGroupMutationString } from 'src/api/api';
import { Groups } from 'src/components/Groups';

import { oneTick, renderComponent, renderComponentWithMocks } from 'tests/testHelpers';

const mockGroup = {
    __typename: 'Group',
    id: '42',
    description: 'test-description',
    name: 'test-name'
};

const mockFetchGroups = {
    request: {
        query: fetchGroupsQueryString,
        variables: {}
    },
    result: {
        data: {
            groups: [mockGroup]
        }
    }
};

const mockFetchGroupsWithNetworkError = {
    request: {
        query: fetchGroupsQueryString,
        variables: {}
    },
    error: new Error('network-error')
};

const mockFetchUser = {
    userWithNoGroups: {
        request: {
            query: fetchUserQueryString,
            variables: {}
        },
        result: {
            data: {
                user: {
                    __typename: 'User',
                    id: '11',
                    groups: [],
                    topics: []
                }
            }
        }
    },
    userWithOneGroup: {
        request: {
            query: fetchUserQueryString,
            variables: {}
        },
        result: {
            data: {
                user: {
                    __typename: 'User',
                    id: '11',
                    groups: [mockGroup],
                    topics: []
                }
            }
        }
    }
};

const mockJoinGroup = {
    request: {
        query: joinGroupMutationString,
        variables: { groupId: 42 }
    },
    result: {
        data: {
            joinGroup: {
                id: 42
            }
        }
    }
};

describe('Groups', () => {
    const LOADING_TEXT = 'Loading...';

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
                mockJoinGroup,
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
});
