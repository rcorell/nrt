import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as loginActions from '../../redux/login/actions';
import { getIsAuthenticated } from '../../redux/login/selectors';
import * as navigationActions from '../../redux/navigation/actions';
import { State } from '../../redux/state.types';

import { NavBar, NavBarLeft, NavBarRight } from './styles';

interface NavigationBarStateProps {
    authenticated: boolean;
}

interface NavigationBarDispatchProps {
    logout: () => void;
    home: () => void;
}

export type NavigationBarComponentProps = NavigationBarStateProps & NavigationBarDispatchProps;

export class NavigationBarComponent extends React.Component<NavigationBarComponentProps> {
    render() {
        if (!this.props.authenticated) {
            return null;
        }

        return (
            <>
                <NavBar>
                    <NavBarLeft>
                        <Link to="" onClick={() => this.props.home()}>
                            Home
                        </Link>
                    </NavBarLeft>
                    <NavBarRight>
                        <Link to="" onClick={() => this.props.logout()}>
                            Logout
                        </Link>
                    </NavBarRight>
                </NavBar>
            </>
        );
    }
}

export const mapStateToProps: (state: State) => NavigationBarStateProps = (state: State) => ({
    authenticated: getIsAuthenticated(state)
});

export const mapDispatchToProps = (dispatch: Function) => ({
    logout: () => dispatch(loginActions.logout()),
    home: () => dispatch(navigationActions.home())
});

export const NavigationBar = connect(mapStateToProps, mapDispatchToProps)(NavigationBarComponent);
