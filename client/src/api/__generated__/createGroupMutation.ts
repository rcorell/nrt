/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createGroupMutation
// ====================================================

export interface createGroupMutation_createGroup {
  __typename: "Topic";
  id: string;
  createdAt: any;
}

export interface createGroupMutation {
  createGroup: createGroupMutation_createGroup;
}

export interface createGroupMutationVariables {
  name: string;
  description?: string | null;
}
