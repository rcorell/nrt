import { createBrowserHistory } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';

import { AddTopic } from 'src/components/addTopic/AddTopic';
import { Home } from 'src/components/home/Home';
import { Login } from 'src/components/login/Login';
import { Path } from 'src/redux/navigation/types';
import { Signup } from 'src/components/signup/Signup';
import { Topics } from 'src/components/topics/Topics';

import { NavigationBar } from './NavigationBar';
import { PrivateRoute } from './PrivateRoute';

const history = createBrowserHistory();
export { history };

export class RoutesComponent extends React.Component<{}> {
    public constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <NavigationBar />

                <Switch>
                    <Route exact path={Path.LOGIN} component={Login} />
                    <Route exact path={Path.SIGNUP} component={Signup} />
                    <Route exact path={Path.ADD_TOPIC} component={AddTopic} />
                    <Route exact path={Path.TOPICS} component={Topics} />

                    {/* <Route exact path={Path.OUT_OF_SERVICE} component={OutOfService} />
                    <Route exact path={Path.WAITING} component={Waiting} /> */}

                    <PrivateRoute exact path={Path.HOME} component={Home} />
                </Switch>
            </Router>
        );
    }
}

export const Routes = connect()(RoutesComponent);
