/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateGroupMutation
// ====================================================

export interface CreateGroupMutation_createGroup {
    __typename: 'Topic';
    id: string;
    createdAt: any;
}

export interface CreateGroupMutation {
    createGroup: CreateGroupMutation_createGroup;
}

export interface CreateGroupMutationVariables {
    name: string;
    description?: string | null;
}
