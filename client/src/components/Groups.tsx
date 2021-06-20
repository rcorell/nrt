import { useMutation, useQuery } from '@apollo/client';
import _ from 'lodash';
import MaterialTable from 'material-table';
import React from 'react';

import { FetchGroupsQuery } from 'src/api/__generated__/FetchGroupsQuery';
import { FetchUserQuery } from 'src/api/__generated__/FetchUserQuery';
import { JoinGroupMutation, JoinGroupMutationVariables } from 'src/api/__generated__/JoinGroupMutation';
import { fetchGroupsQuery, fetchUserQuery, joinGroupMutation } from 'src/api/api';
import { LOADING_TEXT } from 'src/components/shared';
import { setBrowserTitle } from 'src/utils';

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

    const userQuery = useQuery<FetchUserQuery>(fetchUserQuery);
    const allGroups = useQuery<FetchGroupsQuery>(fetchGroupsQuery, {
        fetchPolicy: 'network-only'
    });

    const [joinGroup, { loading: joinGroupLoading, error: joinGroupError }] = useMutation<
        JoinGroupMutation,
        JoinGroupMutationVariables
    >(joinGroupMutation, {
        onCompleted: () => {
            userQuery.refetch();
        },
        onError: () => {}
    });

    if (allGroups.loading || userQuery.loading || joinGroupLoading) {
        return <div>{LOADING_TEXT}</div>;
    }

    if (allGroups.error || userQuery.error || joinGroupError) {
        return (
            <div>
                {JSON.stringify(allGroups.error)}
                <br />
                {JSON.stringify(userQuery.error)}
                <br />
                {JSON.stringify(joinGroupError)}
            </div>
        );
    }

    const userGroupIds = userQuery!.data!.user.groups.map((group) => {
        return group!.id;
    });

    const groups = _.cloneDeep(allGroups!.data!.groups).map((group) => {
        return {
            ...group,
            join: userGroupIds.includes(group.id) ? (
                'Joined'
            ) : (
                <button onClick={() => joinGroup({ variables: { groupId: group.id } })}>Join!</button>
            )
        };
    });

    return <MaterialTable title="Groups" columns={COLUMN_DEFINITIONS} data={groups} />;
};
