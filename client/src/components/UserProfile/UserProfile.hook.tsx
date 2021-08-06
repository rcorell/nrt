import { useFetchUserQuery } from 'src/api/__generated__/types';

export const useUser = () => {
    const { data, error, loading, refetch } = useFetchUserQuery({
        fetchPolicy: 'network-only'
    });

    return { error, loading, refetch, user: data?.user };
};
