import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { logout } from 'src/api/api';
import { GlobalContext } from 'src/components/GlobalContextProvider';
import { history } from 'src/components/Routes';
import { Path } from 'src/redux/navigation/types';

import { NavBar, NavBarLeft, NavBarRight } from './styles';

export const NavigationBar: React.FC = () => {
    let leftNavBar;
    let rightNavBar;

    const { authenticated, setAuthenticated } = useContext(GlobalContext);

    const logoutAndGoToLoginPage = () => {
        logout();
        setAuthenticated(false);
        history.push(Path.LOGIN);
    };

    if (authenticated) {
        leftNavBar = (
            <>
                <Link to={Path.HOME}>Home</Link>
                &nbsp;|&nbsp;
                <Link to={Path.TOPICS}>Topics</Link>
                &nbsp;|&nbsp;
                <Link to={Path.ADD_TOPIC}>Add Topic</Link>
                &nbsp;|&nbsp;
                <Link to={Path.ADD_GROUP}>Add Group</Link>
            </>
        );
        rightNavBar = (
            <Link to="" onClick={logoutAndGoToLoginPage}>
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
        rightNavBar = null;
    }

    return (
        <NavBar>
            <NavBarLeft>{leftNavBar}</NavBarLeft>
            <NavBarRight>{rightNavBar}</NavBarRight>
        </NavBar>
    );
};
