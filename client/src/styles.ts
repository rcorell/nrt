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

export const FormContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 4em;
    h1 {
        font-size: 24pt;
        font-weight: bold;
    }
`;

export const AuthForm = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3em 0;
    button {
        border-radius: 10em;
        box-sizing: border-box;
        color: white;
        margin-top: 2em;
        padding: 0.5em 4em 0.5em 4em;
        &:disabled {
            background-color: #74b29b;
        }
        &:enabled {
            background-color: #1eb683;
            &:active {
                background-color: #127252 !important;
            }
            &:hover {
                background-color: #20cc92;
            }
        }
    }
    input {
        height: 1.5em;
        width: 20em;
        font-size: 1em;
        padding: 1em 0.5em;
    }
    label {
        font-weight: bold;
        padding: 0.5em 0;
    }
`;

export const AuthError = styled.div`
    color: red;
`;
