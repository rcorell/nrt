import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { Provider } from 'react-redux';

import { GlobalContextProvider } from 'src/components/GlobalContextProvider';
import { apolloClient } from 'src/api/api';
import { Routes } from 'src/components/Routes';
import { Store } from 'src/redux/store';
import { AppHeader, GlobalStyle } from 'src/styles';

export const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <GlobalContextProvider>
                <Provider store={Store}>
                    <ApolloProvider client={apolloClient}>
                        <AppHeader>Top 5 Daily</AppHeader>
                        <Routes />
                    </ApolloProvider>
                </Provider>
            </GlobalContextProvider>
        </>
    );
};
