import { useEffect } from 'react';

import {
    useFetchGroupsQuery,
    useFetchUserWithGroupIdsQuery,
    useJoinGroupMutation
} from 'src/api/__generated__/types';

export const hooks = {
    useGroups: () => {
        const { data, error, loading } = useFetchGroupsQuery({
            fetchPolicy: 'network-only'
        });

        return { error, groups: data?.groups, loading };
    },

    useJoinGroup: () => {
        const useUserHook = hooks.useUser();
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
    },

    useUser: () => {
        const { data, error, loading, refetch } = useFetchUserWithGroupIdsQuery({
            fetchPolicy: 'network-only'
        });

        return { error, loading, refetch, user: data?.user };
    }
};
