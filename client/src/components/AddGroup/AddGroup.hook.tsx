import { ApolloError } from '@apollo/client';
import { navigate } from 'hookrouter';
import { useState } from 'react';
import { useCreateGroupMutation } from 'src/api/__generated__/types';
import { Path } from '../Routes';

export const useAddGroup = () => {
    const [graphQLError, setGraphQLError] = useState(null as null | ApolloError);
    const [callMutation, { error }] = useCreateGroupMutation({
        onCompleted: () => {
            navigate(Path.GROUPS);
        },
        onError: setGraphQLError
    });

    const addGroup = (name: string, description: string) => {
        callMutation({
            variables: {
                description,
                name
            }
        });
    };

    const hook = {
        addGroup,
        error: error || graphQLError
    };

    return hook;
};
