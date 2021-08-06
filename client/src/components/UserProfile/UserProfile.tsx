import React from 'react';
import { LOADING_TEXT } from 'src/components/shared';
import { setBrowserTitle } from 'src/utils';

import { useUser } from './UserProfile.hook';

export const UserProfile: React.FC = () => {
    const userHook = useUser();

    setBrowserTitle('User Profile');

    if (userHook.loading) {
        return <b>{LOADING_TEXT}</b>;
    }

    if (userHook.error) {
        return <div>{JSON.stringify(userHook.error)}</div>;
    }

    return <h2>{userHook.user!.name}</h2>;
};

UserProfile.displayName = 'UserProfile';
