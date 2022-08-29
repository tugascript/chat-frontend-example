/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveProfile
// ====================================================

export interface RemoveProfile_removeProfile {
  __typename: "Message";
  id: string;
  message: string;
}

export interface RemoveProfile {
  removeProfile: RemoveProfile_removeProfile;
}

export interface RemoveProfileVariables {
  chatId: string;
  profileId: string;
}
