/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTopicMutation
// ====================================================

export interface CreateTopicMutation_createTopic {
  __typename: "Topic";
  id: string;
}

export interface CreateTopicMutation {
  createTopic: CreateTopicMutation_createTopic;
}

export interface CreateTopicMutationVariables {
  groupId: string;
  title: string;
  description?: string | null;
}
