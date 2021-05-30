import * as _ from 'lodash';
import { useQuery } from '@apollo/client';
import MaterialTable from 'material-table';
import React from 'react';

import { fetchGroupsQueryString } from 'src/api/api';
import { FetchGroupsQuery } from 'src/api/__generated__/FetchGroupsQuery';
import { setBrowserTitle } from 'src/utils';

const COLUMN_DEFINITIONS = [
    { title: 'Name', field: 'name' },
    { title: 'Description', field: 'description' }
];

export const Groups: React.FC = () => {
    setBrowserTitle('Groups');

    const { data, error, loading } = useQuery<FetchGroupsQuery>(fetchGroupsQueryString);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
    }

    const mutableGroups = _.cloneDeep(data!.groups);

    return <MaterialTable title="Topics" columns={COLUMN_DEFINITIONS} data={mutableGroups} />;
};
