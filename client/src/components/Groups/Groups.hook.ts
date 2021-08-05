import { useEffect } from 'react';
import { useFetchGroupsQuery, useFetchUserQueryQuery, useJoinGroupMutation } from 'src/api/__generated__/types';

export const useGroups = () => {
    const { data, error, loading } = useFetchGroupsQuery({
        fetchPolicy: 'network-only'
    });

    return { allGroups: data?.groups, error, loading };
};

export const useUser = () => {
    const { data, error, loading, refetch } = useFetchUserQueryQuery({
        fetchPolicy: 'network-only'
    });

    return { error, loading, refetch, user: data?.user };
};

export const useJoinGroup = () => {
    const useUserHook = useUser();
    const [joinGroup, { loading, error, data: result }] = useJoinGroupMutation();

    useEffect(() => {
        if (result) {
            useUserHook.refetch();
        }
    }, [result, useUserHook]);

    return { error, joinGroup, loading, result };
};
