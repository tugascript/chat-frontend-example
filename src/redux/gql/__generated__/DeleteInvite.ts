/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteInvite
// ====================================================

export interface DeleteInvite_deleteInvite {
  __typename: "Message";
  id: string;
  message: string;
}

export interface DeleteInvite {
  deleteInvite: DeleteInvite_deleteInvite;
}

export interface DeleteInviteVariables {
  inviteId: string;
}
