import { useQuery } from '@apollo/client';
import _ from 'lodash';
import MaterialTable from 'material-table';
import React from 'react';

import { FetchTopicsQuery } from 'src/api/__generated__/FetchTopicsQuery';
import { fetchTopicsQuery } from 'src/api/api';
import { LOADING_TEXT } from 'src/components/shared';
import { setBrowserTitle } from 'src/utils';

const COLUMN_DEFINITIONS = [
    { field: 'title', title: 'Title' },
    { field: 'description', title: 'Description' },
    { field: 'group', title: 'Group' }
];

export const Topics: React.FC = () => {
    setBrowserTitle('Topics');

    const { data, error, loading } = useQuery<FetchTopicsQuery>(fetchTopicsQuery, { fetchPolicy: 'network-only' });

    if (loading) {
        return <div>{LOADING_TEXT}</div>;
    }

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
    }

    const topics = _.cloneDeep(data!.topics).map((topic) => ({ ...topic, group: topic.group.name }));

    return (
        <MaterialTable
            title="Topics"
            columns={COLUMN_DEFINITIONS}
            data={topics}
            options={{
                pageSize: 20,
                pageSizeOptions: [20, 50, 100]
            }}
        />
    );
};
