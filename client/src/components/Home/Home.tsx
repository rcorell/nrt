import React from 'react';

import { FetchUserWithGroupTopicsQuery } from 'src/api/__generated__/types';
import { LOADING_TEXT } from 'src/components/shared';
import { HomePage } from 'src/styles/home';
import { setBrowserTitle } from 'src/utils';

import { useUserWithGroupTopics } from './Home.hook';

type Group = FetchUserWithGroupTopicsQuery['user']['groups'][number];

export const Home: React.FC = () => {
    const userWithGroupTopicsHook = useUserWithGroupTopics();

    setBrowserTitle('Home');

    if (userWithGroupTopicsHook.loading) {
        return <b>{LOADING_TEXT}</b>;
    }

    if (userWithGroupTopicsHook.error) {
        return <div>{JSON.stringify(userWithGroupTopicsHook.error)}</div>;
    }

    if (userWithGroupTopicsHook.user!.groups.length === 0) {
        return <div>Please join a group!</div>;
    }

    const groupTopics = (group: Group) => {
        return (
            <div key={group.id}>
                <h2>{group.name}</h2>
                <ul>
                    {group.topics.map((topic) => (
                        <li key={topic.id}>{topic.title}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return <HomePage>{userWithGroupTopicsHook.user!.groups.map((group) => groupTopics(group))}</HomePage>;
};

Home.displayName = 'Home';
