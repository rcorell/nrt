/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchTopicsQuery
// ====================================================

export interface FetchTopicsQuery_topics_group {
  __typename: "Group";
  id: string;
  name: string;
}

export interface FetchTopicsQuery_topics {
  __typename: "Topic";
  id: string;
  title: string;
  description: string;
  group: FetchTopicsQuery_topics_group;
}

export interface FetchTopicsQuery {
  topics: FetchTopicsQuery_topics[];
}
