import { LoginActions, LoginState } from 'src/redux/login/types';
import { TopicsActions, TopicsState } from 'src/redux/topics/types';

export interface State {
    readonly login: LoginState;
    readonly topics: TopicsState;
}

export interface ReducerState {
    readonly login: (state: LoginState | undefined, action: LoginActions) => LoginState;
    readonly topics: (state: TopicsState | undefined, action: TopicsActions) => TopicsState;
}
