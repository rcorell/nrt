import { useQuery } from '@apollo/client';
import React from 'react';

import {
    FetchUserWithGroupTopicsQueryString,
    FetchUserWithGroupTopicsQueryString_user_groups
} from 'src/api/__generated__/FetchUserWithGroupTopicsQueryString';
import { fetchUserWithGroupTopicsQueryString } from 'src/api/api';
import { LOADING_TEXT } from 'src/components/shared';
import { setBrowserTitle } from 'src/utils';

export const Home: React.FC = () => {
    const query = useQuery<FetchUserWithGroupTopicsQueryString>(fetchUserWithGroupTopicsQueryString);

    setBrowserTitle('Home');

    if (query.loading) {
        return <b>{LOADING_TEXT}</b>;
    }
    if (query.error) {
        return <div>{JSON.stringify(query.error)}</div>;
    }

    const groupTopics = (group: FetchUserWithGroupTopicsQueryString_user_groups | null) => {
        return (
            <div key={group!.id}>
                <h2>{group!.name}</h2>
                <ul key="wtf">
                    {group!.topics.map((topic) => (
                        <li key={topic!.id}>{topic!.title}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return <>{query!.data!.user.groups.map((group) => groupTopics(group))}</>;
};
