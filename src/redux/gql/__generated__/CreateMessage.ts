/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateMessageInput } from "./../__global__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateMessage
// ====================================================

export interface CreateMessage_createMessage_profile {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
}

export interface CreateMessage_createMessage {
  __typename: "ChatMessage";
  entityId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  profile: CreateMessage_createMessage_profile;
}

export interface CreateMessage {
  createMessage: CreateMessage_createMessage;
}

export interface CreateMessageVariables {
  input: CreateMessageInput;
}
