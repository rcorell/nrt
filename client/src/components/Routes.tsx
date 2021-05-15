import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { AddGroup } from 'src/components/AddGroup';
import { AddTopic } from 'src/components/AddTopic';
import { Home } from 'src/components/Home';
import { Login } from 'src/components/Login';
import { NotFound } from 'src/components/NotFound';
import { Path } from 'src/redux/navigation/types';
import { Signup } from 'src/components/Signup';
import { Topics } from 'src/components/Topics';

import { NavigationBar } from './NavigationBar';
import { PrivateRoute } from './PrivateRoute';

export const history = createBrowserHistory();

export const Routes: React.FC = () => {
    return (
        <Router history={history}>
            <NavigationBar />

            <Switch>
                <Route exact path={Path.LOGIN} component={Login} />
                <Route exact path={Path.SIGNUP} component={Signup} />
                <PrivateRoute exact path={Path.ADD_TOPIC} component={AddTopic} />
                <PrivateRoute exact path={Path.TOPICS} component={Topics} />
                <PrivateRoute exact path={Path.ADD_GROUP} component={AddGroup} />
                <PrivateRoute exact path={Path.HOME} component={Home} />

                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};
