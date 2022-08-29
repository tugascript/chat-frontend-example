/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MessageById
// ====================================================

export interface MessageById_messageById_profile {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
}

export interface MessageById_messageById {
  __typename: "ChatMessage";
  entityId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  profile: MessageById_messageById_profile;
}

export interface MessageById {
  messageById: MessageById_messageById;
}

export interface MessageByIdVariables {
  chatId: string;
  messageId: string;
}
