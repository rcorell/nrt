import * as _ from 'lodash';
import { useQuery } from '@apollo/client';
import MaterialTable from 'material-table';
import React from 'react';

import { fetchTopicsQueryString } from 'src/api/api';
import { FetchTopicsQuery } from 'src/api/__generated__/FetchTopicsQuery';
import { setBrowserTitle } from 'src/utils';

const COLUMN_DEFINITIONS = [
    { title: 'Title', field: 'title' },
    { title: 'Description', field: 'description' }
];

export const Topics: React.FC = () => {
    setBrowserTitle('Topics');

    const { data, error, loading } = useQuery<FetchTopicsQuery>(fetchTopicsQueryString);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
    }

    const mutableTopics = _.cloneDeep(data!.topics);

    return <MaterialTable title="Topics" columns={COLUMN_DEFINITIONS} data={mutableTopics} />;
};
