import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';
import React, { useState } from 'react';
import { Provider } from 'react-redux';

import { apolloClient } from 'src/api/api';
import { Routes } from 'src/components/Routes';
import { Store } from 'src/redux/store';
import { AppHeader, GlobalStyle } from 'src/styles';

export interface GlobalContextData {
    authenticated: boolean;
    setAuthenticated: (authenticated: boolean) => void;
}

export const GlobalContext = React.createContext<GlobalContextData>({
    authenticated: false,
    setAuthenticated: _authenticated => {
        /* stub */
    }
});

export const App: React.FC = () => {
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <>
            <GlobalStyle />
            <GlobalContext.Provider value={{ authenticated, setAuthenticated }}>
                <Provider store={Store}>
                    <ApolloProvider client={apolloClient}>
                        <AppHeader>Top 5 Daily</AppHeader>
                        <Routes />
                    </ApolloProvider>
                </Provider>
            </GlobalContext.Provider>
        </>
    );
};
