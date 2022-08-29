/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InviteStatus, OnlineStatus, ChatType } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: SentInviteById
// ====================================================

export interface SentInviteById_sentInviteById_recipient {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface SentInviteById_sentInviteById_chat_author {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface SentInviteById_sentInviteById_chat {
  __typename: "Chat";
  entityId: string;
  slug: string;
  name: string;
  chatType: ChatType;
  createdAt: string;
  updatedAt: string;
  expiration: number;
  profilesCount: number;
  author: SentInviteById_sentInviteById_chat_author;
}

export interface SentInviteById_sentInviteById {
  __typename: "Invite";
  entityId: string;
  invitation: string;
  status: InviteStatus;
  createdAt: string;
  updatedAt: string;
  recipient: SentInviteById_sentInviteById_recipient;
  chat: SentInviteById_sentInviteById_chat;
}

export interface SentInviteById {
  sentInviteById: SentInviteById_sentInviteById;
}

export interface SentInviteByIdVariables {
  inviteId: string;
}
