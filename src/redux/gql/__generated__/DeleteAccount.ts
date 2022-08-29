/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteAccount
// ====================================================

export interface DeleteAccount_deleteAccount {
  __typename: "Message";
  id: string;
  message: string;
}

export interface DeleteAccount {
  deleteAccount: DeleteAccount_deleteAccount;
}

export interface DeleteAccountVariables {
  password: string;
}
