import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloProvider } from '@apollo/client';
import React from 'react';

import { apolloClient } from 'src/api/api';
import { GlobalContextProvider } from 'src/components/GlobalContextProvider';
import { Routes } from 'src/components/Routes';
import { AppHeader, GlobalStyle } from 'src/styles/app';

export const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <GlobalContextProvider>
                <ApolloProvider client={apolloClient}>
                    <AppHeader>Top 5 Daily</AppHeader>
                    <Routes />
                </ApolloProvider>
            </GlobalContextProvider>
        </>
    );
};
