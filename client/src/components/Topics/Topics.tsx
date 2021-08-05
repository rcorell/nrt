import _ from 'lodash';
import MaterialTable from 'material-table';
import React from 'react';

import { LOADING_TEXT } from 'src/components/shared';
import { setBrowserTitle } from 'src/utils';
import { useTopics } from './Topics.hook';

const COLUMN_DEFINITIONS = [
    { field: 'title', title: 'Title' },
    { field: 'description', title: 'Description' },
    { field: 'group', title: 'Group' }
];

export const Topics: React.FC = () => {
    setBrowserTitle('Topics');

    const useTopicsHook = useTopics();

    if (useTopicsHook.loading) {
        return <div>{LOADING_TEXT}</div>;
    }

    if (useTopicsHook.error) {
        return <div>Error: {JSON.stringify(useTopicsHook.error)}</div>;
    }

    const topics = _.cloneDeep(useTopicsHook.topics!).map((topic) => ({ ...topic, group: topic.group.name }));

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
