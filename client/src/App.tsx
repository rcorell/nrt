import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';

import { Routes } from 'src/components/routes/Routes';
import { Store } from 'src/redux/store';
import { AppHeader, GlobalStyle } from 'src/styles';

export class App extends React.Component {
    public render() {
        return (
            <>
                <GlobalStyle />
                <Provider store={Store}>
                    <AppHeader>Top 5 Daily</AppHeader>
                    <Routes />
                </Provider>
            </>
        );
    }
}
