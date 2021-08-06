import { useFetchUserWithGroupTopicsQuery } from 'src/api/__generated__/types';

export const useUserWithGroupTopics = () => {
    const { data, loading, error, refetch } = useFetchUserWithGroupTopicsQuery();
    return { error, loading, refetch, user: data?.user };
};
