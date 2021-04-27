import { LoginActions, LoginState } from '../redux/login/types';

export interface State {
    readonly login: LoginState;
}

export interface ReducerState {
    readonly login: (state: LoginState | undefined, action: LoginActions) => LoginState;
}
