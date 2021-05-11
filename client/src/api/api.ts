import { gql, GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient('http://localhost:4000');

interface SignupResponse {
    signup: { token: string };
}

interface LoginResponse {
    login: { token: string };
}

interface AddGroupResponse {
    id: number;
    createdAt: string;
}

// interface AddTopicResponse {
//     topic: string;
// }

// type Topic = {
//     title: string;
//     description: string;
// };

// interface FetchTopicsResponse {
//     topics: Topic[];
// }

// type Group = {
//     description: string;
//     name: string;
// };

export const signup = async (email: string, name: string, password: string) => {
    const signupMutation = gql`
        mutation SignupMutation($email: String!, $name: String!, $password: String!) {
            signup(email: $email, name: $name, password: $password) {
                token
            }
        }
    `;

    const signupResponse: SignupResponse = await graphQLClient.request<SignupResponse>(signupMutation, {
        email,
        name,
        password
    });

    const untypedResponse: any = signupResponse as any;

    if (untypedResponse.errors) {
        throw new Error(untypedResponse.errors);
    }

    const authValue = `Bearer ${signupResponse.signup.token}`;

    graphQLClient.setHeader('Authorization', authValue);
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('token', signupResponse.signup.token);
};

export const login = async (email: string, password: string) => {
    const loginMutation = gql`
        mutation LoginMutation($email: String!, $password: String!) {
            login(email: $email, password: $password) {
                token
            }
        }
    `;

    const loginResponse: LoginResponse = await graphQLClient.request<LoginResponse>(loginMutation, {
        email,
        password
    });

    const untypedResponse: any = loginResponse as any;

    if (untypedResponse.errors) {
        throw new Error(untypedResponse.errors);
    }

    const authValue = `Bearer ${loginResponse.login.token}`;

    graphQLClient.setHeader('Authorization', authValue);
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('token', loginResponse.login.token);
};

export const checkAuthenticated = (): boolean => {
    const token = window.localStorage.getItem('token');

    if (!token) {
        return false;
    }

    graphQLClient.setHeader('Authorization', `Bearer ${token}`);

    return true;
};

// export function* _addTopic(action: ActionType<typeof addTopicActions.addTopic>) {
//     const { topic } = action.payload;

//     const addTopicMutation = gql`
//         mutation CreateTopicMutation($title: String!, $description: String) {
//             createTopic(title: $title, description: $description) {
//                 id
//                 createdAt
//             }
//         }
//     `;

//     try {
//         const addTopicResponse: AddTopicResponse = yield graphQLClient.request<AddTopicResponse>(addTopicMutation, {
//             description: '',
//             title: topic
//         });

//         console.log(JSON.stringify(addTopicResponse));

//         const untypedResponse: any = addTopicResponse as any;

//         if (untypedResponse.errors) {
//             throw new Error(untypedResponse.errors);
//         }

//         // yield put(something);
//     } catch (error: any) {
//         console.log(error);
//     }

//     // yield put(signupActions.failure());
// }

export const addGroup = async (description: string, name: string) => {
    const addGroupMutation = gql`
        mutation CreateGroupMutation($name: String!, $description: String) {
            createGroup(name: $name, description: $description) {
                id
                createdAt
            }
        }
    `;

    const addGroupResponse: AddGroupResponse = await graphQLClient.request<AddGroupResponse>(addGroupMutation, {
        description: description,
        name: name
    });

    console.log(JSON.stringify(addGroupResponse));

    const untypedResponse: any = addGroupResponse as any;

    if (untypedResponse.errors) {
        throw new Error(untypedResponse.errors);
    }
};

// export const fetchTopics = async () => {
//     const fetchTopicsQuery = gql`
//         {
//             topics {
//                 title
//                 description
//             }
//         }
//     `;

//     try {
//         const getTopicsResponse: FetchTopicsResponse = await graphQLClient.request<FetchTopicsResponse>(
//             fetchTopicsQuery
//         );

//         console.log(JSON.stringify(getTopicsResponse));

//         const untypedResponse: any = getTopicsResponse as any;

//         if (untypedResponse.errors) {
//             throw new Error(untypedResponse.errors);
//         }
//         console.log(untypedResponse);

//         return getTopicsResponse.topics as Topic[];
//     } catch (error: any) {
//         console.log(error);
//     }

//     return [];
// };

// export function* _fetchTopics(action: ActionType<typeof topicsActions.fetchTopics>) {
//     const topics: Topic[] = yield call(fetchTopics);
//     yield put(topicsActions.setTopics(topics));
// }
