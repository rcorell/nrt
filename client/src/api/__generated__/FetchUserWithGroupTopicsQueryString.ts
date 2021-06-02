/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchUserWithGroupTopicsQueryString
// ====================================================

export interface FetchUserWithGroupTopicsQueryString_user_groups_topics {
  __typename: "Topic";
  id: string;
  title: string;
  description: string;
}

export interface FetchUserWithGroupTopicsQueryString_user_groups {
  __typename: "Group";
  id: string;
  description: string;
  name: string;
  topics: (FetchUserWithGroupTopicsQueryString_user_groups_topics | null)[];
}

export interface FetchUserWithGroupTopicsQueryString_user_topics {
  __typename: "Topic";
  id: string;
  description: string;
  title: string;
}

export interface FetchUserWithGroupTopicsQueryString_user {
  __typename: "User";
  groups: (FetchUserWithGroupTopicsQueryString_user_groups | null)[];
  topics: (FetchUserWithGroupTopicsQueryString_user_topics | null)[];
}

export interface FetchUserWithGroupTopicsQueryString {
  user: FetchUserWithGroupTopicsQueryString_user;
}
