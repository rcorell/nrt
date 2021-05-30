import { A, navigate } from 'hookrouter';
import React, { useContext } from 'react';

import { logout } from 'src/api/api';
import { GlobalContext } from 'src/components/GlobalContextProvider';
import { Path } from 'src/components/Routes';
import { NavBar, NavBarLeft, NavBarRight } from 'src/styles/navbar';

export const NavigationBar: React.FC = () => {
    let leftNavBar;
    let rightNavBar;

    const { authenticated, setAuthenticated } = useContext(GlobalContext);

    const logoutAndGoToLoginPage = () => {
        logout();
        setAuthenticated(false);
        navigate(Path.LOGIN);
    };

    if (authenticated) {
        leftNavBar = (
            <>
                <A href={Path.HOME}>Home</A>
                &nbsp;|&nbsp;
                <A href={Path.TOPICS}>Topics</A>
                &nbsp;|&nbsp;
                <A href={Path.ADD_TOPIC}>Add Topic</A>
                &nbsp;|&nbsp;
                <A href={Path.GROUPS}>Groups</A>
                &nbsp;|&nbsp;
                <A href={Path.ADD_GROUP}>Add Group</A>
            </>
        );
        rightNavBar = (
            <A href="" onClick={logoutAndGoToLoginPage}>
                Logout
            </A>
        );
    } else {
        leftNavBar = (
            <>
                <A href={Path.LOGIN}>Log in</A>
                &nbsp;|&nbsp;
                <A href={Path.SIGNUP}>Sign up</A>
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
