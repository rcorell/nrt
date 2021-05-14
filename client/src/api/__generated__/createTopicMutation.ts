/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createTopicMutation
// ====================================================

export interface createTopicMutation_createTopic {
  __typename: "Topic";
  id: string;
  createdAt: any;
}

export interface createTopicMutation {
  createTopic: createTopicMutation_createTopic;
}

export interface createTopicMutationVariables {
  title: string;
  description?: string | null;
}
