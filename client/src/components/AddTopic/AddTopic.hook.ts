import { navigate } from 'hookrouter';

import { useCreateTopicMutation } from 'src/api/__generated__/types';

import { Path } from '../Routes';

export const useAddTopic = () => {
    const [callMutation, { error }] = useCreateTopicMutation({
        onCompleted: () => {
            navigate(Path.TOPICS);
        },
        onError: () => {
            // RTL bug
        }
    });

    const addTopic = (groupId: string, title: string, description: string) => {
        callMutation({
            variables: {
                description,
                groupId,
                title
            }
        });
    };

    return { addTopic, error };
};
