import * as _ from 'lodash';
import { useQuery } from '@apollo/client';
import MaterialTable from 'material-table';
import React from 'react';

import { FetchTopicsQuery } from 'src/api/api';
import { fetchTopics } from 'src/api/__generated__/fetchTopics';
import { setBrowserTitle } from 'src/components/utils';

const COLUMN_DEFINITIONS = [
    { title: 'Title', field: 'title' },
    { title: 'Description', field: 'description' }
];

export const Topics: React.FC = () => {
    setBrowserTitle('Topics');

    const { data, error, loading } = useQuery<fetchTopics>(FetchTopicsQuery);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
    }

    if (!data?.topics) {
        return <div>No results</div>;
    }

    const mutableTopics = _.cloneDeep(data.topics);

    return <MaterialTable title="Topics" columns={COLUMN_DEFINITIONS} data={mutableTopics} />;
};
