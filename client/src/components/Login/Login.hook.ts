import { navigate } from 'hookrouter';
import { useContext } from 'react';

import { useLoginMutation } from 'src/api/__generated__/types';

import { GlobalContext } from '../GlobalContextProvider';

export const useLogin = () => {
    const { setAuthenticated } = useContext(GlobalContext);
    const [callMutation, { error }] = useLoginMutation({
        onCompleted: (result) => {
            if (result?.login) {
                localStorage.setItem('token', result.login.token!);
                setAuthenticated(true);
                navigate('/');
            }
        },
        onError: () => {
            // https://github.com/apollographql/apollo-client/issues/7167
        }
    });

    const login = (email: string, password: string) => {
        callMutation({
            variables: {
                email,
                password
            }
        });
    };

    return { error, login };
};
