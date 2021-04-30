import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as loginActions from '../../redux/login/actions';
import { getIsAuthenticated } from '../../redux/login/selectors';
import * as navigationActions from '../../redux/navigation/actions';
import { Path } from '../../redux/navigation/types';
import { State } from '../../redux/state.types';
import { NavBar, NavBarLeft, NavBarRight } from './styles';

interface NavigationBarStateProps {
    authenticated: boolean;
}

interface NavigationBarDispatchProps {
    addTopic: () => void;
    logout: () => void;
    home: () => void;
    signup: () => void;
}

export type NavigationBarComponentProps = NavigationBarStateProps & NavigationBarDispatchProps;

export class NavigationBarComponent extends React.Component<NavigationBarComponentProps> {
    render() {
        let leftNavBar;
        let rightNavBar;

        if (this.props.authenticated) {
            leftNavBar = (
                <>
                    <Link to="" onClick={() => this.props.home()}>
                        Home
                    </Link>
                    &nbsp;|&nbsp;
                    <Link to="" onClick={() => this.props.addTopic()}>
                        Add Topic
                    </Link>
                </>
            );
            rightNavBar = (
                <Link to="" onClick={() => this.props.logout()}>
                    Logout
                </Link>
            );
        } else {
            leftNavBar = (
                <>
                    <Link to={Path.LOGIN}>Log in</Link>
                    &nbsp;|&nbsp;
                    <Link to={Path.SIGNUP}>Sign up</Link>
                </>
            );
        }

        return (
            <>
                <NavBar>
                    <NavBarLeft>{leftNavBar}</NavBarLeft>
                    <NavBarRight>{rightNavBar}</NavBarRight>
                </NavBar>
            </>
        );
    }
}

export const mapStateToProps: (state: State) => NavigationBarStateProps = (state: State) => ({
    authenticated: getIsAuthenticated(state)
});

export const mapDispatchToProps = (dispatch: Function) => ({
    addTopic: () => dispatch(navigationActions.addTopic()),
    logout: () => dispatch(loginActions.logout()),
    home: () => dispatch(navigationActions.home()),
    signup: () => dispatch(navigationActions.signup())
});

export const NavigationBar = connect(mapStateToProps, mapDispatchToProps)(NavigationBarComponent);
