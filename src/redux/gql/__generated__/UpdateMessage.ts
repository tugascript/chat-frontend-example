/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateMessageInput } from "./../__global__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateMessage
// ====================================================

export interface UpdateMessage_updateMessage {
  __typename: "ChatMessage";
  entityId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateMessage {
  updateMessage: UpdateMessage_updateMessage;
}

export interface UpdateMessageVariables {
  input: UpdateMessageInput;
}
