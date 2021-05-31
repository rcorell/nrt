import { useMutation, useQuery } from '@apollo/client';
import * as _ from 'lodash';
import MaterialTable from 'material-table';
import React from 'react';

import { FetchGroupsQuery } from 'src/api/__generated__/FetchGroupsQuery';
import { FetchUserQuery } from 'src/api/__generated__/FetchUserQuery';
import { JoinGroupMutation, JoinGroupMutationVariables } from 'src/api/__generated__/JoinGroupMutation';
import { fetchGroupsQueryString, fetchUserQueryString, joinGroupMutationString } from 'src/api/api';
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

    const userQuery = useQuery<FetchUserQuery>(fetchUserQueryString);
    const allGroups = useQuery<FetchGroupsQuery>(fetchGroupsQueryString);

    const [joinGroup] = useMutation<JoinGroupMutation, JoinGroupMutationVariables>(joinGroupMutationString, {
        onCompleted: () => {
            userQuery.refetch();
        },
        onError: () => {}
    });

    if (allGroups.loading || userQuery.loading) {
        return <div>{LOADING_TEXT}</div>;
    }

    if (allGroups.error || userQuery.error) {
        return <div>Error: {JSON.stringify(allGroups.error) + JSON.stringify(userQuery.error)}</div>;
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
                <button onClick={() => joinGroup({ variables: { groupId: Number(group.id) } })}>Join!</button>
            )
        };
    });

    return <MaterialTable title="Groups" columns={COLUMN_DEFINITIONS} data={groups} />;
};
