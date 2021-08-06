import { useFetchTopicsQuery } from 'src/api/__generated__/types';

export const useTopics = () => {
    const { data, error, loading, refetch } = useFetchTopicsQuery({ fetchPolicy: 'network-only' });
    return { error, loading, refetch, topics: data?.topics };
};
