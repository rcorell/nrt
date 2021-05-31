import { useQuery } from '@apollo/client';
import * as _ from 'lodash';
import MaterialTable from 'material-table';
import React from 'react';

import { FetchTopicsQuery } from 'src/api/__generated__/FetchTopicsQuery';
import { fetchTopicsQueryString } from 'src/api/api';
import { LOADING_TEXT } from 'src/components/shared';
import { setBrowserTitle } from 'src/utils';

const COLUMN_DEFINITIONS = [
    { field: 'title', title: 'Title' },
    { field: 'description', title: 'Description' }
];

export const Topics: React.FC = () => {
    setBrowserTitle('Topics');

    const { data, error, loading } = useQuery<FetchTopicsQuery>(fetchTopicsQueryString);

    if (loading) {
        return <div>{LOADING_TEXT}</div>;
    }

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
    }

    const mutableTopics = _.cloneDeep(data!.topics);

    return <MaterialTable title="Topics" columns={COLUMN_DEFINITIONS} data={mutableTopics} />;
};
