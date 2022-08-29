/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LeaveChat
// ====================================================

export interface LeaveChat_leaveChat {
  __typename: "Message";
  id: string;
  message: string;
}

export interface LeaveChat {
  leaveChat: LeaveChat_leaveChat;
}

export interface LeaveChatVariables {
  chatId: string;
}
