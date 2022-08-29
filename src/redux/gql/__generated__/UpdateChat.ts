/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateChatInput, ChatType } from "./../__global__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateChat
// ====================================================

export interface UpdateChat_updateChat {
  __typename: "Chat";
  entityId: string;
  name: string;
  slug: string;
  chatType: ChatType;
  createdAt: string;
  updatedAt: string;
  endOfLife: string;
  expiration: number;
}

export interface UpdateChat {
  updateChat: UpdateChat_updateChat;
}

export interface UpdateChatVariables {
  input: UpdateChatInput;
}
