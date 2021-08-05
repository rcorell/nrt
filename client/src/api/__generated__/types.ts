import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: any;
    /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
    BigInt: any;
    /** The `Byte` scalar type represents byte value as a Buffer */
    Byte: any;
    /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
    Currency: any;
    /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: any;
    /**
     *
     *     A string representing a duration conforming to the ISO8601 standard,
     *     such as: P1W1DT13H23M34S
     *     P is the duration designator (for period) placed at the start of the duration representation.
     *     Y is the year designator that follows the value for the number of years.
     *     M is the month designator that follows the value for the number of months.
     *     W is the week designator that follows the value for the number of weeks.
     *     D is the day designator that follows the value for the number of days.
     *     T is the time designator that precedes the time components of the representation.
     *     H is the hour designator that follows the value for the number of hours.
     *     M is the minute designator that follows the value for the number of minutes.
     *     S is the second designator that follows the value for the number of seconds.
     *
     *     Note the time designator, T, that precedes the time value.
     *
     *     Matches moment.js, Luxon and DateFns implementations
     *     ,/. is valid for decimal places and +/- is a valid prefix
     *
     */
    Duration: any;
    /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
    EmailAddress: any;
    /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
    GUID: any;
    /** A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
    HSL: any;
    /** A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
    HSLA: any;
    /** A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors. */
    HexColorCode: any;
    /** A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal. */
    Hexadecimal: any;
    /** A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number. */
    IBAN: any;
    /** A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4. */
    IPv4: any;
    /** A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6. */
    IPv6: any;
    /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
    ISBN: any;
    /**
     *
     *     A string representing a duration conforming to the ISO8601 standard,
     *     such as: P1W1DT13H23M34S
     *     P is the duration designator (for period) placed at the start of the duration representation.
     *     Y is the year designator that follows the value for the number of years.
     *     M is the month designator that follows the value for the number of months.
     *     W is the week designator that follows the value for the number of weeks.
     *     D is the day designator that follows the value for the number of days.
     *     T is the time designator that precedes the time components of the representation.
     *     H is the hour designator that follows the value for the number of hours.
     *     M is the minute designator that follows the value for the number of minutes.
     *     S is the second designator that follows the value for the number of seconds.
     *
     *     Note the time designator, T, that precedes the time value.
     *
     *     Matches moment.js, Luxon and DateFns implementations
     *     ,/. is valid for decimal places and +/- is a valid prefix
     *
     */
    ISO8601Duration: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
    /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSONObject: any;
    /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
    JWT: any;
    /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
    Latitude: any;
    /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
    LocalDate: any;
    /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.  This scalar is very similar to the `LocalTime`, with the only difference being that `LocalEndTime` also allows `24:00` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block. */
    LocalEndTime: any;
    /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
    LocalTime: any;
    /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
    Long: any;
    /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
    Longitude: any;
    /** A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address. */
    MAC: any;
    /** Floats that will have a value less than 0. */
    NegativeFloat: any;
    /** Integers that will have a value less than 0. */
    NegativeInt: any;
    /** A string that cannot be passed as an empty value */
    NonEmptyString: any;
    /** Floats that will have a value of 0 or more. */
    NonNegativeFloat: any;
    /** Integers that will have a value of 0 or more. */
    NonNegativeInt: any;
    /** Floats that will have a value of 0 or less. */
    NonPositiveFloat: any;
    /** Integers that will have a value of 0 or less. */
    NonPositiveInt: any;
    /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
    ObjectID: any;
    /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
    PhoneNumber: any;
    /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
    Port: any;
    /** Floats that will have a value greater than 0. */
    PositiveFloat: any;
    /** Integers that will have a value greater than 0. */
    PositiveInt: any;
    /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
    PostalCode: any;
    /** A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
    RGB: any;
    /** A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
    RGBA: any;
    /** The `SafeInt` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification. */
    SafeInt: any;
    /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Time: any;
    /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
    Timestamp: any;
    /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
    URL: any;
    /** A currency string, such as $21.25 */
    USCurrency: any;
    /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
    UUID: any;
    /** Floats that will have a value of 0 or more. */
    UnsignedFloat: any;
    /** Integers that will have a value of 0 or more. */
    UnsignedInt: any;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
    /** A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
    UtcOffset: any;
    /** Represents NULL values */
    Void: any;
};

export type AuthPayload = {
    __typename?: 'AuthPayload';
    token?: Maybe<Scalars['String']>;
    user?: Maybe<User>;
};

export enum CacheControlScope {
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export type Group = {
    __typename?: 'Group';
    id: Scalars['ID'];
    name: Scalars['String'];
    description: Scalars['String'];
    creator: User;
    users: Array<User>;
    topics: Array<Topic>;
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
};

export type Mutation = {
    __typename?: 'Mutation';
    createGroup: Group;
    createTopic: Topic;
    joinGroup?: Maybe<Scalars['ID']>;
    signup?: Maybe<AuthPayload>;
    login?: Maybe<AuthPayload>;
};

export type MutationCreateGroupArgs = {
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
};

export type MutationCreateTopicArgs = {
    groupId: Scalars['ID'];
    title: Scalars['String'];
    description?: Maybe<Scalars['String']>;
};

export type MutationJoinGroupArgs = {
    groupId: Scalars['ID'];
};

export type MutationSignupArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
    name: Scalars['String'];
};

export type MutationLoginArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};

export type Query = {
    __typename?: 'Query';
    groups: Array<Group>;
    ready: Scalars['String'];
    topics: Array<Topic>;
    user: User;
};

export type QueryTopicsArgs = {
    groupIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Topic = {
    __typename?: 'Topic';
    id: Scalars['ID'];
    title: Scalars['String'];
    description: Scalars['String'];
    author: User;
    group: Group;
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
};

export type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    name: Scalars['String'];
    email: Scalars['String'];
    topics: Array<Topic>;
    groupsCreated: Array<Group>;
    groups: Array<Group>;
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
};

export type CreateGroupMutationVariables = Exact<{
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
}>;

export type CreateGroupMutation = {
    __typename?: 'Mutation';
    createGroup: { __typename?: 'Group'; id: string; createdAt: any };
};

export type FetchGroupsQueryVariables = Exact<{ [key: string]: never }>;

export type FetchGroupsQuery = {
    __typename?: 'Query';
    groups: Array<{ __typename?: 'Group'; id: string; name: string; description: string }>;
};

export type FetchUserQueryVariables = Exact<{ [key: string]: never }>;

export type FetchUserQuery = {
    __typename?: 'Query';
    user: {
        __typename?: 'User';
        id: string;
        name: string;
        email: string;
        groups: Array<{ __typename?: 'Group'; id: string; description: string; name: string }>;
        groupsCreated: Array<{ __typename?: 'Group'; id: string; description: string; name: string }>;
        topics: Array<{ __typename?: 'Topic'; id: string; description: string; title: string }>;
    };
};

export type JoinGroupMutationVariables = Exact<{
    groupId: Scalars['ID'];
}>;

export type JoinGroupMutation = { __typename?: 'Mutation'; joinGroup?: Maybe<string> };

export type FetchUserWithGroupTopicsQueryVariables = Exact<{ [key: string]: never }>;

export type FetchUserWithGroupTopicsQuery = {
    __typename?: 'Query';
    user: {
        __typename?: 'User';
        id: string;
        groups: Array<{
            __typename?: 'Group';
            id: string;
            description: string;
            name: string;
            topics: Array<{ __typename?: 'Topic'; id: string; title: string; description: string }>;
        }>;
    };
};

export type LoginMutationVariables = Exact<{
    email: Scalars['String'];
    password: Scalars['String'];
}>;

export type LoginMutation = {
    __typename?: 'Mutation';
    login?: Maybe<{ __typename?: 'AuthPayload'; token?: Maybe<string> }>;
};

export const CreateGroupDocument = gql`
    mutation CreateGroup($name: String!, $description: String) {
        createGroup(name: $name, description: $description) {
            id
            createdAt
        }
    }
`;
export type CreateGroupMutationFn = Apollo.MutationFunction<CreateGroupMutation, CreateGroupMutationVariables>;

/**
 * __useCreateGroupMutation__
 *
 * To run a mutation, you first call `useCreateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMutation, { data, loading, error }] = useCreateGroupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateGroupMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateGroupMutation, CreateGroupMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument, options);
}
export type CreateGroupMutationHookResult = ReturnType<typeof useCreateGroupMutation>;
export type CreateGroupMutationResult = Apollo.MutationResult<CreateGroupMutation>;
export type CreateGroupMutationOptions = Apollo.BaseMutationOptions<
    CreateGroupMutation,
    CreateGroupMutationVariables
>;
export const FetchGroupsDocument = gql`
    query FetchGroups {
        groups {
            id
            name
            description
        }
    }
`;

/**
 * __useFetchGroupsQuery__
 *
 * To run a query within a React component, call `useFetchGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchGroupsQuery(
    baseOptions?: Apollo.QueryHookOptions<FetchGroupsQuery, FetchGroupsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<FetchGroupsQuery, FetchGroupsQueryVariables>(FetchGroupsDocument, options);
}
export function useFetchGroupsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<FetchGroupsQuery, FetchGroupsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<FetchGroupsQuery, FetchGroupsQueryVariables>(FetchGroupsDocument, options);
}
export type FetchGroupsQueryHookResult = ReturnType<typeof useFetchGroupsQuery>;
export type FetchGroupsLazyQueryHookResult = ReturnType<typeof useFetchGroupsLazyQuery>;
export type FetchGroupsQueryResult = Apollo.QueryResult<FetchGroupsQuery, FetchGroupsQueryVariables>;
export const FetchUserDocument = gql`
    query FetchUser {
        user {
            id
            name
            email
            groups {
                id
                description
                name
            }
            groupsCreated {
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

/**
 * __useFetchUserQuery__
 *
 * To run a query within a React component, call `useFetchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchUserQuery(baseOptions?: Apollo.QueryHookOptions<FetchUserQuery, FetchUserQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<FetchUserQuery, FetchUserQueryVariables>(FetchUserDocument, options);
}
export function useFetchUserLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<FetchUserQuery, FetchUserQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<FetchUserQuery, FetchUserQueryVariables>(FetchUserDocument, options);
}
export type FetchUserQueryHookResult = ReturnType<typeof useFetchUserQuery>;
export type FetchUserLazyQueryHookResult = ReturnType<typeof useFetchUserLazyQuery>;
export type FetchUserQueryResult = Apollo.QueryResult<FetchUserQuery, FetchUserQueryVariables>;
export const JoinGroupDocument = gql`
    mutation JoinGroup($groupId: ID!) {
        joinGroup(groupId: $groupId)
    }
`;
export type JoinGroupMutationFn = Apollo.MutationFunction<JoinGroupMutation, JoinGroupMutationVariables>;

/**
 * __useJoinGroupMutation__
 *
 * To run a mutation, you first call `useJoinGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinGroupMutation, { data, loading, error }] = useJoinGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useJoinGroupMutation(
    baseOptions?: Apollo.MutationHookOptions<JoinGroupMutation, JoinGroupMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<JoinGroupMutation, JoinGroupMutationVariables>(JoinGroupDocument, options);
}
export type JoinGroupMutationHookResult = ReturnType<typeof useJoinGroupMutation>;
export type JoinGroupMutationResult = Apollo.MutationResult<JoinGroupMutation>;
export type JoinGroupMutationOptions = Apollo.BaseMutationOptions<JoinGroupMutation, JoinGroupMutationVariables>;
export const FetchUserWithGroupTopicsDocument = gql`
    query FetchUserWithGroupTopics {
        user {
            id
            groups {
                id
                description
                name
                topics {
                    id
                    title
                    description
                }
            }
        }
    }
`;

/**
 * __useFetchUserWithGroupTopicsQuery__
 *
 * To run a query within a React component, call `useFetchUserWithGroupTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserWithGroupTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserWithGroupTopicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchUserWithGroupTopicsQuery(
    baseOptions?: Apollo.QueryHookOptions<FetchUserWithGroupTopicsQuery, FetchUserWithGroupTopicsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<FetchUserWithGroupTopicsQuery, FetchUserWithGroupTopicsQueryVariables>(
        FetchUserWithGroupTopicsDocument,
        options
    );
}
export function useFetchUserWithGroupTopicsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<FetchUserWithGroupTopicsQuery, FetchUserWithGroupTopicsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<FetchUserWithGroupTopicsQuery, FetchUserWithGroupTopicsQueryVariables>(
        FetchUserWithGroupTopicsDocument,
        options
    );
}
export type FetchUserWithGroupTopicsQueryHookResult = ReturnType<typeof useFetchUserWithGroupTopicsQuery>;
export type FetchUserWithGroupTopicsLazyQueryHookResult = ReturnType<typeof useFetchUserWithGroupTopicsLazyQuery>;
export type FetchUserWithGroupTopicsQueryResult = Apollo.QueryResult<
    FetchUserWithGroupTopicsQuery,
    FetchUserWithGroupTopicsQueryVariables
>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
