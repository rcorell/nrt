import { ApolloClient, ApolloLink, gql, HttpLink, InMemoryCache } from '@apollo/client';

const AUTHENTICATION_TOKEN_NAME = 'token';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

const authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem(AUTHENTICATION_TOKEN_NAME);

    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : ''
        }
    });

    return forward(operation);
});

export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export const isAuthenticated = () => {
    return Boolean(localStorage.getItem(AUTHENTICATION_TOKEN_NAME));
};

export const setAuthenticationToken = (token: string) => {
    localStorage.setItem(AUTHENTICATION_TOKEN_NAME, token);
};

export const fetchTopicsQueryString = gql`
    query FetchTopicsQuery {
        topics {
            title
            description
        }
    }
`;

export const CreateGroupMutation = gql`
    mutation CreateGroupMutation($name: String!, $description: String) {
        createGroup(name: $name, description: $description) {
            id
            createdAt
        }
    }
`;

export const SignupMutation = gql`
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

export const CreateTopicMutation = gql`
    mutation CreateTopicMutation($title: String!, $description: String) {
        createTopic(title: $title, description: $description) {
            id
            createdAt
        }
    }
`;
