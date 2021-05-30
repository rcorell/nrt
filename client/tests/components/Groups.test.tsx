import { MockedResponse } from '@apollo/client/testing';
import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';

import { fetchGroupsQueryString, fetchUserQueryString, joinGroupMutationString } from 'src/api/api';
import { Groups } from 'src/components/Groups';

import { oneTick, renderComponent, renderComponentWithMocks } from 'tests/testHelpers';

describe('Groups', () => {
    const LOADING_TEXT = 'Loading...';

    describe('snapshots', () => {
        it('loading', () => {
            expect(renderComponent(Groups).container).toMatchSnapshot();
        });

        it('network error', async () => {
            const networkError = new Error('Network-error');

            const { container } = renderComponent(Groups, fetchGroupsQueryString, {}, { error: networkError });

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText('No results')).toBeNull();

            expect(container).toMatchSnapshot();
        });
    });

    describe('success', () => {
        it('display one group', async () => {
            const mocks: MockedResponse[] = [
                {
                    request: {
                        query: fetchGroupsQueryString,
                        variables: {}
                    },
                    result: {
                        data: {
                            groups: [
                                {
                                    __typename: 'Group',
                                    id: '42',
                                    description: 'test-description',
                                    name: 'test-name'
                                }
                            ]
                        }
                    }
                },
                {
                    request: {
                        query: fetchUserQueryString,
                        variables: {}
                    },
                    result: {
                        data: {
                            user: {
                                id: '11',
                                groups: [],
                                topics: []
                            }
                        }
                    }
                }
            ];
            renderComponentWithMocks(Groups, mocks);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText('test-description')).toBeInTheDocument();
            expect(screen.queryByText('test-name')).toBeInTheDocument();
        });

        it('join group', async () => {
            const mocks: MockedResponse[] = [
                {
                    request: {
                        query: fetchGroupsQueryString,
                        variables: {}
                    },
                    result: {
                        data: {
                            groups: [
                                {
                                    __typename: 'Group',
                                    id: '42',
                                    description: 'test-description',
                                    name: 'test-name'
                                }
                            ]
                        }
                    }
                },
                {
                    request: {
                        query: fetchUserQueryString,
                        variables: {}
                    },
                    result: {
                        data: {
                            user: {
                                id: '11',
                                groups: [],
                                topics: []
                            }
                        }
                    }
                },
                {
                    request: {
                        query: joinGroupMutationString,
                        variables: { groupId: '42' }
                    },
                    result: {
                        data: {
                            id: '42'
                        }
                    }
                },
                {
                    request: {
                        query: fetchUserQueryString,
                        variables: {}
                    },
                    result: {
                        data: {
                            user: {
                                id: '11',
                                groups: [{ id: '42', name: 'name', description: 'description' }],
                                topics: []
                            }
                        }
                    }
                }
            ];
            renderComponentWithMocks(Groups, mocks);

            await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

            expect(screen.queryByText('test-description')).toBeInTheDocument();
            expect(screen.queryByText('test-name')).toBeInTheDocument();

            const joinButton = screen.getByText('Join!');
            fireEvent.click(joinButton);
            await oneTick();

            // expect(screen.queryByText('Joined')).toBeInTheDocument();
        });
    });
});
