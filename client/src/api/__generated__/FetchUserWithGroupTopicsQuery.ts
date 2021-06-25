/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchUserWithGroupTopicsQuery
// ====================================================

export interface FetchUserWithGroupTopicsQuery_user_groups_topics {
  __typename: "Topic";
  id: string;
  title: string;
  description: string;
}

export interface FetchUserWithGroupTopicsQuery_user_groups {
  __typename: "Group";
  id: string;
  description: string;
  name: string;
  topics: FetchUserWithGroupTopicsQuery_user_groups_topics[];
}

export interface FetchUserWithGroupTopicsQuery_user {
  __typename: "User";
  id: string;
  groups: FetchUserWithGroupTopicsQuery_user_groups[];
}

export interface FetchUserWithGroupTopicsQuery {
  user: FetchUserWithGroupTopicsQuery_user;
}
