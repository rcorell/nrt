import { navigate } from 'hookrouter';
import { useContext } from 'react';
import { useSignupMutation } from 'src/api/__generated__/types';
import { GlobalContext } from '../GlobalContextProvider';

export const useSignup = () => {
    const { setAuthenticated } = useContext(GlobalContext);
    const [callMutation, { error }] = useSignupMutation({
        onCompleted: (result) => {
            if (result?.signup) {
                localStorage.setItem('token', result.signup.token!);
                setAuthenticated(true);
                navigate('/');
            }
        },
        onError: () => {
            // RTL bug
        }
    });

    const signup = (email: string, name: string, password: string) => {
        callMutation({
            variables: {
                email,
                name,
                password
            }
        });
    };

    return { error, signup };
};
