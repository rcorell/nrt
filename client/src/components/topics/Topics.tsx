import MaterialTable from 'material-table';
import React, { useEffect, useRef, useState } from 'react';

import { setBrowserTitle } from 'src/components/utils';
import { Topic } from 'src/redux/topics/types';
import { fetchTopics } from 'src/sagas/api';

const COLUMN_DEFINITIONS = [
    { title: 'Title', field: 'title' },
    { title: 'Description', field: 'description' }
];

export const Topics: React.FC = () => {
    const [topics, setTopics] = useState([] as Topic[]);
    const componentIsMounted = useRef(true);

    useEffect(() => {
        return () => {
            componentIsMounted.current = false;
        };
    }, []);

    useEffect(() => {
        const fetchTopicsHook = async () => {
            const result = await fetchTopics();

            if (componentIsMounted.current) {
                setTopics(result);
            }
        };

        fetchTopicsHook();
    }, []);

    setBrowserTitle('Topics');

    return <MaterialTable title="Topics" columns={COLUMN_DEFINITIONS} data={topics} />;
};
