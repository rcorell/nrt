import _ from 'lodash';
import MaterialTable from 'material-table';
import React from 'react';

import { LOADING_TEXT } from 'src/components/shared';
import { setBrowserTitle } from 'src/utils';

import { useGroups, useJoinGroup, useUser } from './Groups.hook';

const COLUMN_DEFINITIONS = [
    { field: 'name', title: 'Name' },
    { field: 'description', title: 'Description' },
    {
        field: 'join',
        title: ''
    }
];

export const Groups: React.FC = () => {
    setBrowserTitle('Groups');

    const userHook = useUser();
    const groupsHook = useGroups();

    const joinGroupHook = useJoinGroup();

    if (groupsHook.loading || userHook.loading || joinGroupHook.loading) {
        return <div>{LOADING_TEXT}</div>;
    }
    if (groupsHook.error || userHook.error || joinGroupHook.error) {
        return (
            <div>
                {JSON.stringify(groupsHook.error)}
                <br />
                {JSON.stringify(userHook.error)}
                <br />
                {JSON.stringify(joinGroupHook.error)}
            </div>
        );
    }

    const userGroupIds = userHook.user!.groups.map((group) => {
        return group!.id;
    });

    const groups = _.cloneDeep(groupsHook!.allGroups!).map((group) => {
        return {
            ...group,
            join: userGroupIds.includes(group.id) ? (
                'Joined'
            ) : (
                <button onClick={() => joinGroupHook.joinGroup(group.id)}>Join!</button>
            )
        };
    });

    return (
        <MaterialTable
            title="Groups"
            columns={COLUMN_DEFINITIONS}
            data={groups}
            options={{
                pageSize: 20,
                pageSizeOptions: [20, 50, 100]
            }}
        />
    );
};
