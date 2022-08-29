/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveMessage
// ====================================================

export interface RemoveMessage_removeMessage {
  __typename: "Message";
  id: string;
  message: string;
}

export interface RemoveMessage {
  removeMessage: RemoveMessage_removeMessage;
}

export interface RemoveMessageVariables {
  chatId: string;
  messageId: string;
}
