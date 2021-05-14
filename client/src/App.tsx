import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { Provider } from 'react-redux';

import { apolloClient } from 'src/api/api';
import { Routes } from 'src/components/routes/Routes';
import { Store } from 'src/redux/store';
import { AppHeader, GlobalStyle } from 'src/styles';

export class App extends React.Component {
    public render() {
        return (
            <>
                <GlobalStyle />
                <Provider store={Store}>
                    <ApolloProvider client={apolloClient}>
                        <AppHeader>Top 5 Daily</AppHeader>
                        <Routes />
                    </ApolloProvider>
                </Provider>
            </>
        );
    }
}
