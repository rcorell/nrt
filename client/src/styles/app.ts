import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        font-family: 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
    }
`;

export const AppHeader = styled.div`
    align-items: center;
    background-color: #c10c11;
    color: white;
    display: flex;
    font-size: 24pt;
    font-style: italic;
    font-weight: bold;
    height: 1.75em;
    margin: 0;
    padding: 0.1em 0 0.4em 0.7em;
    text-align: left;
`;

export const AppRule = styled.hr`
    padding: 0;
`;

export const AppBody = styled.div`
    padding: 2em;
`;
