import React from 'react';
import * as _ from 'lodash';
import { useMutation, useQuery } from '@apollo/client';
import MaterialTable from 'material-table';

import { fetchGroupsQueryString, fetchUserQueryString, joinGroupMutationString } from 'src/api/api';
import { FetchGroupsQuery } from 'src/api/__generated__/FetchGroupsQuery';
import { FetchUserQuery } from 'src/api/__generated__/FetchUserQuery';
import { JoinGroupMutation, JoinGroupMutationVariables } from 'src/api/__generated__/JoinGroupMutation';
import { setBrowserTitle } from 'src/utils';

// const renderJoinColumn = (rowData: any) => {
//     if (userGroups.contains(rowData.name)) {
//         return <p>Joined</p>;
//     }

//     return <p>Join</p>;
// };

const COLUMN_DEFINITIONS = [
    { title: 'Name', field: 'name' },
    { title: 'Description', field: 'description' },
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
            // console.log('woo');
            userQuery.refetch();
        },
        onError: () => {
            // https://github.com/apollographql/apollo-client/issues/7167
        }
    });

    if (allGroups.loading || userQuery.loading) {
        return <div>Loading...</div>;
    }

    if (allGroups.error || userQuery.error) {
        return <div>Error: {JSON.stringify(allGroups.error) + JSON.stringify(userQuery.error)}</div>;
    }

    const userGroupIds = userQuery!.data!.user.groups.map((group) => {
        return group!.id;
    });

    const groups = _.cloneDeep(allGroups.data!.groups).map((group) => {
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
