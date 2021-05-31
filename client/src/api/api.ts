import { ApolloClient, ApolloLink, gql, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

export const AUTHENTICATION_TOKEN_NAME = 'token';

const httpLink = new HttpLink({ fetch, uri: 'http://localhost:4000' });

export const authHeader = (token: string | null) => (token ? `Bearer ${token}` : '');

const authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem(AUTHENTICATION_TOKEN_NAME);

    operation.setContext({
        headers: {
            authorization: authHeader(token)
        }
    });

    return forward(operation);
});

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
});

export const isAuthenticated = () => {
    return Boolean(window.localStorage.getItem(AUTHENTICATION_TOKEN_NAME));
};

export const logout = () => {
    localStorage.setItem(AUTHENTICATION_TOKEN_NAME, '');
};

export const setAuthenticationToken = (token: string) => {
    localStorage.setItem(AUTHENTICATION_TOKEN_NAME, token);
};

export const fetchGroupsQueryString = gql`
    query FetchGroupsQuery {
        groups {
            id
            name
            description
        }
    }
`;

export const fetchTopicsQueryString = gql`
    query FetchTopicsQuery {
        topics {
            id
            title
            description
        }
    }
`;

export const fetchUserQueryString = gql`
    query FetchUserQuery {
        user {
            groups {
                id
                description
                name
            }
            topics {
                id
                description
                title
            }
        }
    }
`;

export const createGroupMutationString = gql`
    mutation CreateGroupMutation($name: String!, $description: String) {
        createGroup(name: $name, description: $description) {
            id
            createdAt
        }
    }
`;

export const signupMutationString = gql`
    mutation SignupMutation($email: String!, $name: String!, $password: String!) {
        signup(email: $email, name: $name, password: $password) {
            token
        }
    }
`;

export const loginMutationString = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

export const createTopicMutationString = gql`
    mutation CreateTopicMutation($groupId: ID!, $title: String!, $description: String) {
        createTopic(groupId: $groupId, title: $title, description: $description) {
            id
        }
    }
`;

export const joinGroupMutationString = gql`
    mutation JoinGroupMutation($groupId: Int!) {
        joinGroup(groupId: $groupId)
    }
`;
