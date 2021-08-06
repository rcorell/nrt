import { useRoutes } from 'hookrouter';
import React from 'react';

import { AddGroup } from 'src/components/AddGroup/AddGroup';
import { AddTopic } from 'src/components/AddTopic/AddTopic';
import { Groups } from 'src/components/Groups/Groups';
import { Home } from 'src/components/Home/Home';
import { Login } from 'src/components/Login/Login';
import { NotFound } from 'src/components/NotFound';
import { Signup } from 'src/components/Signup/Signup';
import { Topics } from 'src/components/Topics/Topics';
import { UserProfile } from 'src/components/UserProfile/UserProfile';
import { AppBody } from 'src/styles/app';

import { NavigationBar } from './NavigationBar';

export enum Path {
    ADD_GROUP = '/add-group',
    ADD_TOPIC = '/add-topic',
    GROUPS = '/groups',
    HOME = '/',
    LOGIN = '/login',
    SIGNUP = '/signup',
    TOPICS = '/topics',
    USER_PROFILE = '/user-profile'
}

export const Routes: React.FC = () => {
    const routes = {
        [Path.ADD_GROUP]: () => <AddGroup />,
        [Path.ADD_TOPIC]: () => <AddTopic />,
        [Path.GROUPS]: () => <Groups />,
        [Path.HOME]: () => <Home />,
        [Path.LOGIN]: () => <Login />,
        [Path.SIGNUP]: () => <Signup />,
        [Path.TOPICS]: () => <Topics />,
        [Path.USER_PROFILE]: () => <UserProfile />
    };

    const routeResults = useRoutes(routes);

    return (
        <>
            <NavigationBar />
            <AppBody>{routeResults || <NotFound />}</AppBody>
        </>
    );
};
