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

export interface FetchUserQuery_user_groupsCreated {
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
  id: string;
  name: string;
  email: string;
  groups: FetchUserQuery_user_groups[];
  groupsCreated: FetchUserQuery_user_groupsCreated[];
  topics: FetchUserQuery_user_topics[];
}

export interface FetchUserQuery {
  user: FetchUserQuery_user;
}
