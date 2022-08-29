/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InviteStatus, ChatType, OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateRejectedInvite
// ====================================================

export interface UpdateRejectedInvite_updateRejectedInvite_chat_author {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
}

export interface UpdateRejectedInvite_updateRejectedInvite_chat {
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
  author: UpdateRejectedInvite_updateRejectedInvite_chat_author;
}

export interface UpdateRejectedInvite_updateRejectedInvite {
  __typename: "Invite";
  entityId: string;
  invitation: string;
  status: InviteStatus;
  createdAt: string;
  updatedAt: string;
  chat: UpdateRejectedInvite_updateRejectedInvite_chat;
}

export interface UpdateRejectedInvite {
  updateRejectedInvite: UpdateRejectedInvite_updateRejectedInvite;
}

export interface UpdateRejectedInviteVariables {
  invitation: string;
}
