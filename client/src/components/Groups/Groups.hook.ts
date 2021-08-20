import { useEffect } from 'react';

import {
    useFetchGroupsQuery,
    useFetchUserWithGroupIdsQuery,
    useJoinGroupMutation
} from 'src/api/__generated__/types';

export const useGroups = () => {
    const { data, error, loading } = useFetchGroupsQuery({
        fetchPolicy: 'network-only'
    });

    return { allGroups: data?.groups, error, loading };
};

export const useUser = () => {
    const { data, error, loading, refetch } = useFetchUserWithGroupIdsQuery({
        fetchPolicy: 'network-only'
    });

    return { error, loading, refetch, user: data?.user };
};

export const useJoinGroup = () => {
    const useUserHook = useUser();
    const [callMutation, { loading, error, data: result }] = useJoinGroupMutation();

    useEffect(() => {
        if (result) {
            useUserHook.refetch();
        }
    }, [result, useUserHook]);

    const joinGroup = (groupId: string) => {
        callMutation({
            variables: {
                groupId
            }
        });
    };

    return { error, joinGroup, loading, result };
};
