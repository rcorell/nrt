/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: loginMutation
// ====================================================

export interface loginMutation_login {
  __typename: "AuthPayload";
  token: string | null;
}

export interface loginMutation {
  login: loginMutation_login | null;
}

export interface loginMutationVariables {
  email: string;
  password: string;
}
