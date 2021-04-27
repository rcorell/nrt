import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        font-family: 'Helvetica Neue', sans-serif;
    }
`;

export const AppHeader = styled.div`
    align-items: center;
    background-color: #6b20ce;
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
