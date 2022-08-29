/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveChat
// ====================================================

export interface RemoveChat_removeChat {
  __typename: "Message";
  id: string;
  message: string;
}

export interface RemoveChat {
  removeChat: RemoveChat_removeChat;
}

export interface RemoveChatVariables {
  chatId: string;
}
