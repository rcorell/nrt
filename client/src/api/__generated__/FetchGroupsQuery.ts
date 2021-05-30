/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchGroupsQuery
// ====================================================

export interface FetchGroupsQuery_groups {
  __typename: "Group";
  name: string;
  description: string;
}

export interface FetchGroupsQuery {
  groups: FetchGroupsQuery_groups[];
}
