import { useQuery } from '@apollo/client';
import React from 'react';

import {
    FetchUserWithGroupTopicsQuery,
    FetchUserWithGroupTopicsQuery_user_groups
} from 'src/api/__generated__/FetchUserWithGroupTopicsQuery';
import { fetchUserWithGroupTopicsQuery } from 'src/api/api';
import { LOADING_TEXT } from 'src/components/shared';
import { HomePage } from 'src/styles/home';
import { setBrowserTitle } from 'src/utils';

export const Home: React.FC = () => {
    const query = useQuery<FetchUserWithGroupTopicsQuery>(fetchUserWithGroupTopicsQuery);

    setBrowserTitle('Home');

    if (query.loading) {
        return <b>{LOADING_TEXT}</b>;
    }
    if (query.error) {
        return <div>{JSON.stringify(query.error)}</div>;
    }

    const groupTopics = (group: FetchUserWithGroupTopicsQuery_user_groups | null) => {
        return (
            <div key={group!.id}>
                <h2>{group!.name}</h2>
                <ul>
                    {group!.topics.map((topic) => (
                        <li key={topic!.id}>{topic!.title}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return <HomePage>{query!.data!.user.groups.map((group) => groupTopics(group))}</HomePage>;
};
