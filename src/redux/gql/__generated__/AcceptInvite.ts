/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InviteStatus, ChatType, OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL mutation operation: AcceptInvite
// ====================================================

export interface AcceptInvite_acceptInvite_chat_author {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
}

export interface AcceptInvite_acceptInvite_chat {
  __typename: "Chat";
  entityId: string;
  slug: string;
  name: string;
  chatType: ChatType;
  createdAt: string;
  updatedAt: string;
  expiration: number;
  invitation: string | null;
  profilesCount: number;
  author: AcceptInvite_acceptInvite_chat_author;
}

export interface AcceptInvite_acceptInvite {
  __typename: "Invite";
  entityId: string;
  invitation: string;
  status: InviteStatus;
  createdAt: string;
  updatedAt: string;
  chat: AcceptInvite_acceptInvite_chat;
}

export interface AcceptInvite {
  acceptInvite: AcceptInvite_acceptInvite;
}

export interface AcceptInviteVariables {
  invitation: string;
}
