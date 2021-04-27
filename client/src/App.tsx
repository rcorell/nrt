import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';

import { Routes } from './components/routes/Routes';
import { Store } from './redux/store';

import { AppHeader, GlobalStyle } from './styles';

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
