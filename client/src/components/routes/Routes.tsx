import { createBrowserHistory } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';

import { AddGroup } from 'src/components/AddGroup';
import { AddTopic } from 'src/components/AddTopic';
import { Home } from 'src/components/Home';
import { Login } from 'src/components/Login';
import * as loginActions from 'src/redux/login/actions';
import { NotFound } from 'src/components/NotFound';
import { Path } from 'src/redux/navigation/types';
import { Signup } from 'src/components/Signup';
import { Topics } from 'src/components/Topics';

import { NavigationBar } from './NavigationBar';
import { PrivateRoute } from './PrivateRoute';

const history = createBrowserHistory();
export { history };

interface RoutesDispatchProps {
    authenticated: () => void;
}

export class RoutesComponent extends React.Component<RoutesDispatchProps> {
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
                    <PrivateRoute exact path={Path.ADD_TOPIC} component={AddTopic} />
                    <Route exact path={Path.TOPICS} component={Topics} />
                    <PrivateRoute exact path={Path.ADD_GROUP} component={AddGroup} />

                    {/* <Route exact path={Path.OUT_OF_SERVICE} component={OutOfService} />
                    <Route exact path={Path.WAITING} component={Waiting} /> */}

                    <PrivateRoute exact path={Path.HOME} component={Home} />

                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export const mapDispatchToProps = (dispatch: Function) => ({
    authenticated: () => dispatch(loginActions.authenticated())
});

export const Routes = connect(null, mapDispatchToProps)(RoutesComponent);
