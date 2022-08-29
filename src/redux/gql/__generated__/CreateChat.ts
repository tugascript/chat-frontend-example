/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateChatInput } from "./../__global__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateChat
// ====================================================

export interface CreateChat_createChat {
  __typename: "Chat";
  entityId: string;
  slug: string;
}

export interface CreateChat {
  createChat: CreateChat_createChat;
}

export interface CreateChatVariables {
  input: CreateChatInput;
}
