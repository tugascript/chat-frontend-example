/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InviteStatus, OnlineStatus, ChatType } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: InviteById
// ====================================================

export interface InviteById_inviteById_sender {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface InviteById_inviteById_chat_author {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface InviteById_inviteById_chat {
  __typename: "Chat";
  entityId: string;
  slug: string;
  name: string;
  chatType: ChatType;
  createdAt: string;
  updatedAt: string;
  expiration: number;
  profilesCount: number;
  author: InviteById_inviteById_chat_author;
}

export interface InviteById_inviteById {
  __typename: "Invite";
  entityId: string;
  invitation: string;
  status: InviteStatus;
  createdAt: string;
  updatedAt: string;
  sender: InviteById_inviteById_sender;
  chat: InviteById_inviteById_chat;
}

export interface InviteById {
  inviteById: InviteById_inviteById;
}

export interface InviteByIdVariables {
  inviteId: string;
}
