/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProfile
// ====================================================

export interface CreateProfile_createProfile_chat {
  __typename: "Chat";
  entityId: string;
  name: string;
  slug: string;
  expiration: number;
}

export interface CreateProfile_createProfile {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
  time: number;
  createdAt: string;
  updatedAt: string;
  chat: CreateProfile_createProfile_chat;
}

export interface CreateProfile {
  createProfile: CreateProfile_createProfile;
}

export interface CreateProfileVariables {
  invitation: string;
}
