/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchUserQuery
// ====================================================

export interface FetchUserQuery_user_groups {
  __typename: "Group";
  id: string;
  description: string;
  name: string;
}

export interface FetchUserQuery_user_topics {
  __typename: "Topic";
  id: string;
  description: string;
  title: string;
}

export interface FetchUserQuery_user {
  __typename: "User";
  groups: (FetchUserQuery_user_groups | null)[];
  topics: (FetchUserQuery_user_topics | null)[];
}

export interface FetchUserQuery {
  user: FetchUserQuery_user;
}