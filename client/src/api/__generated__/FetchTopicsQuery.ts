/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchTopicsQuery
// ====================================================

export interface FetchTopicsQuery_topics {
  __typename: "Topic";
  title: string;
  description: string;
}

export interface FetchTopicsQuery {
  topics: FetchTopicsQuery_topics[];
}
