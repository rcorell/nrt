import styled from 'styled-components';

export const LoginContainer = styled.div`
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

export const LoginForm = styled.form`
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

export const LoginError = styled.div`
    color: red;
`;
