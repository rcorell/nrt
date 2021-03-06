import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { GlobalContext } from 'src/components/GlobalContextProvider';
import { NavigationBar } from 'src/components/NavigationBar';
import { Path } from 'src/components/Routes';
import { lastNavigationPath, oneTick, setLastNavigationPath } from 'tests/testHelpers';

let logoutCalled = false;
jest.mock('src/api/api', () => {
    return {
        logout: () => {
            logoutCalled = true;
        }
    };
});

describe('NavigationBar', () => {
    describe('snapshots', () => {
        it('unauthenticated', () => {
            global.expectComponentToMatchSnapshot(NavigationBar);
        });

        it('authenticated', () => {
            const navbarRender = render(
                <GlobalContext.Provider value={{ authenticated: true, setAuthenticated: () => {} }}>
                    <NavigationBar />
                </GlobalContext.Provider>
            );
            expect(navbarRender.container).toMatchSnapshot();
        });
    });

    it('logout de-auths and navigates to login', async () => {
        logoutCalled = false;
        setLastNavigationPath('initial path');

        render(
            <GlobalContext.Provider value={{ authenticated: true, setAuthenticated: () => {} }}>
                <NavigationBar />
            </GlobalContext.Provider>
        );
        const logoutLink = screen.getByText('Logout');
        fireEvent.click(logoutLink);

        await oneTick();

        expect(logoutCalled).toBeTruthy();
        expect(lastNavigationPath).toEqual(Path.LOGIN);
    });
});
