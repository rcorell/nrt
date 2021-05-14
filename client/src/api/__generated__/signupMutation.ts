/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signupMutation
// ====================================================

export interface signupMutation_signup {
  __typename: "AuthPayload";
  token: string | null;
}

export interface signupMutation {
  signup: signupMutation_signup | null;
}

export interface signupMutationVariables {
  email: string;
  name: string;
  password: string;
}
