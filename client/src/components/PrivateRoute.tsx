import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { isAuthenticated } from 'src/api/api';
import { Path } from '../redux/navigation/types';

export class PrivateRouteComponent extends Route<{}> {
    public constructor(props = {}) {
        super(props);
    }

    render() {
        if (isAuthenticated()) {
            return <Route {...this.props} />;
        }
        return <Redirect to={Path.LOGIN} />;
    }
}

export const PrivateRoute = connect()(PrivateRouteComponent);
