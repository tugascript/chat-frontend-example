/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateAccountDescription
// ====================================================

export interface UpdateAccountDescription_updateAccountDescription {
  __typename: "User";
  id: string;
  name: string;
  username: string;
  description: string | null;
  updatedAt: string;
}

export interface UpdateAccountDescription {
  updateAccountDescription: UpdateAccountDescription_updateAccountDescription;
}

export interface UpdateAccountDescriptionVariables {
  description: string;
}
