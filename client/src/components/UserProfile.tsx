import { useQuery } from '@apollo/client';
import React from 'react';

import { FetchUserQuery } from 'src/api/__generated__/FetchUserQuery';
import { fetchUserQuery } from 'src/api/api';
import { LOADING_TEXT } from 'src/components/shared';
import { setBrowserTitle } from 'src/utils';

export const UserProfile: React.FC = () => {
    const query = useQuery<FetchUserQuery>(fetchUserQuery);

    setBrowserTitle('User Profile');

    if (query.loading) {
        return <b>{LOADING_TEXT}</b>;
    }

    if (query.error) {
        return <div>{JSON.stringify(query.error)}</div>;
    }

    return <h2>{query.data!.user.name}</h2>;
};
