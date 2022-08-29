/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateNicknameInput } from "./../__global__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateOwnNickname
// ====================================================

export interface UpdateOwnNickname_updateOwnNickname_chat {
  __typename: "Chat";
  entityId: string;
  name: string;
  slug: string;
  expiration: number;
}

export interface UpdateOwnNickname_updateOwnNickname {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
  createdAt: string;
  expiration: number;
  updatedAt: string;
  chat: UpdateOwnNickname_updateOwnNickname_chat;
}

export interface UpdateOwnNickname {
  updateOwnNickname: UpdateOwnNickname_updateOwnNickname;
}

export interface UpdateOwnNicknameVariables {
  input: UpdateNicknameInput;
}
