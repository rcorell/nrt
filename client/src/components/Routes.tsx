import { useRoutes } from 'hookrouter';
import React from 'react';

import { AddGroup } from 'src/components/AddGroup';
import { AddTopic } from 'src/components/AddTopic';
import { Home } from 'src/components/Home';
import { Login } from 'src/components/Login';
import { NotFound } from 'src/components/NotFound';
import { Signup } from 'src/components/Signup';
import { Topics } from 'src/components/Topics';

import { NavigationBar } from './NavigationBar';

export enum Path {
    ADD_GROUP = '/add-group',
    ADD_TOPIC = '/add-topic',
    HOME = '/',
    LOGIN = '/login',
    SIGNUP = '/signup',
    TOPICS = '/topics'
}

export const Routes: React.FC = () => {
    const routes = {
        [Path.ADD_GROUP]: () => <AddGroup />,
        [Path.ADD_TOPIC]: () => <AddTopic />,
        [Path.HOME]: () => <Home />,
        [Path.LOGIN]: () => <Login />,
        [Path.SIGNUP]: () => <Signup />,
        [Path.TOPICS]: () => <Topics />
    };

    const routeResults = useRoutes(routes);

    return (
        <>
            <NavigationBar />
            {routeResults || <NotFound />}
        </>
    );
};
