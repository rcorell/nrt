import * as _ from 'lodash';
import { useQuery } from '@apollo/client';
import MaterialTable from 'material-table';
import React from 'react';

import { fetchGroupsQueryString, fetchUserQueryString } from 'src/api/api';
import { FetchGroupsQuery } from 'src/api/__generated__/FetchGroupsQuery';
import { FetchUserQuery } from 'src/api/__generated__/FetchUserQuery';
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

    if (allGroups.loading || userQuery.loading) {
        return <div>Loading...</div>;
    }

    if (allGroups.error || userQuery.error) {
        return <div>Error: {JSON.stringify(allGroups.error)}</div>;
    }

    const userGroupNames = userQuery!.data!.user.groups.map((group) => {
        return group!.name;
    });

    const groups = _.cloneDeep(allGroups.data!.groups).map((group) => {
        return {
            ...group,
            join: userGroupNames.includes(group.name) ? 'Joined' : <button>Join!</button>
        };
    });

    return <MaterialTable title="Topics" columns={COLUMN_DEFINITIONS} data={groups} />;
};
