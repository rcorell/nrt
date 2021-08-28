import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';

import { Groups } from 'src/components/Groups/Groups';
import { hooks } from 'src/components/Groups/Groups.hook';
import { LOADING_TEXT } from 'src/components/shared';
import { VALID } from 'tests/fixtures';
import { fetchUserWithGroupIdsMocks, fetchUserWithoutGroupIdsMocks } from 'tests/mocks/userMocks';
import { renderComponent } from 'tests/testHelpers';

import { fetchGroupsMocks, groupsMocks, joinGroupMocks } from './Groups.mocks';

describe('Groups', () => {
    describe('Static tests', () => {
        let useGroupsSpy: jest.SpyInstance;
        let useJoinGroupSpy: jest.SpyInstance;
        let useUserSpy: jest.SpyInstance;

        beforeAll(() => {
            useGroupsSpy = jest.spyOn(hooks, 'useGroups');
            useJoinGroupSpy = jest.spyOn(hooks, 'useJoinGroup');
            useUserSpy = jest.spyOn(hooks, 'useUser');
        });

        afterAll(() => {
            jest.restoreAllMocks();
        });

        describe('loading', () => {
            beforeEach(() => {
                useGroupsSpy.mockImplementation(() => ({
                    error: 'error',
                    loading: false
                }));
                useJoinGroupSpy.mockImplementation(() => ({
                    error: 'error',
                    loading: false
                }));
                useUserSpy.mockImplementation(() => ({
                    error: 'error',
                    loading: false
                }));
            });

            it('useGroups', () => {
                useGroupsSpy.mockImplementation(() => ({
                    loading: true
                }));

                expect(renderComponent(Groups).container).toMatchSnapshot();
            });

            it('useJoinGroup', () => {
                useJoinGroupSpy.mockImplementation(() => ({
                    loading: true
                }));

                expect(renderComponent(Groups).container).toMatchSnapshot();
            });

            it('useUser', () => {
                useUserSpy.mockImplementation(() => ({
                    loading: true
                }));

                expect(renderComponent(Groups).container).toMatchSnapshot();
            });
        });

        describe('success', () => {
            it('displays groups', async () => {
                useGroupsSpy.mockImplementation(() => groupsMocks.useGroups.success);
                useJoinGroupSpy.mockImplementation(() => groupsMocks.useJoinGroup.success);
                useUserSpy.mockImplementation(() => groupsMocks.useUser.success);

                expect(render(<Groups />).container).toMatchSnapshot();
            });
        });

        describe('failure', () => {
            it('useGroups error', async () => {
                useGroupsSpy.mockImplementation(() => groupsMocks.useGroups.error);
                useJoinGroupSpy.mockImplementation(() => groupsMocks.useJoinGroup.success);
                useUserSpy.mockImplementation(() => groupsMocks.useUser.success);

                expect(render(<Groups />).container).toMatchSnapshot();
            });

            it('useJoinGroup error', async () => {
                useGroupsSpy.mockImplementation(() => groupsMocks.useGroups.success);
                useJoinGroupSpy.mockImplementation(() => groupsMocks.useJoinGroup.error);
                useUserSpy.mockImplementation(() => groupsMocks.useUser.success);

                expect(render(<Groups />).container).toMatchSnapshot();
            });

            it('useUser error', async () => {
                useGroupsSpy.mockImplementation(() => groupsMocks.useGroups.success);
                useJoinGroupSpy.mockImplementation(() => groupsMocks.useJoinGroup.success);
                useUserSpy.mockImplementation(() => groupsMocks.useUser.error);

                expect(render(<Groups />).container).toMatchSnapshot();
            });
        });
    });

    describe('Operational tests', () => {
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
    });
});
