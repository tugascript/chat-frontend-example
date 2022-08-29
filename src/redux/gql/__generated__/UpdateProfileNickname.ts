/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateProfileNicknameInput } from "./../__global__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateProfileNickname
// ====================================================

export interface UpdateProfileNickname_updateProfileNickname_chat {
  __typename: "Chat";
  entityId: string;
  name: string;
  slug: string;
  expiration: number;
}

export interface UpdateProfileNickname_updateProfileNickname {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
  expiration: number;
  createdAt: string;
  updatedAt: string;
  chat: UpdateProfileNickname_updateProfileNickname_chat;
}

export interface UpdateProfileNickname {
  updateProfileNickname: UpdateProfileNickname_updateProfileNickname;
}

export interface UpdateProfileNicknameVariables {
  input: UpdateProfileNicknameInput;
}
