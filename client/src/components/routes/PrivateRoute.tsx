import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { getIsAuthenticated } from '../../redux/login/selectors';
import { Path } from '../../redux/navigation/types';
import { State } from '../../redux/state.types';

interface PrivateRouteStateProps {
    authenticated: boolean;
}

export type PrivateRouteComponentProps = RouteProps & PrivateRouteStateProps;

export class PrivateRouteComponent extends Route<PrivateRouteComponentProps> {
    public constructor(props: PrivateRouteComponentProps) {
        super(props);
    }

    render() {
        if (this.props.authenticated) {
            return <Route {...this.props} />;
        }
        return <Redirect to={Path.LOGIN} />;
    }
}

export const mapStateToProps: (state: State) => PrivateRouteStateProps = (state: State) => ({
    authenticated: getIsAuthenticated(state)
});

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent);
