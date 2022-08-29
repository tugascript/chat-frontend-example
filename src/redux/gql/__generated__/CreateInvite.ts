/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateInviteInput, InviteStatus, OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateInvite
// ====================================================

export interface CreateInvite_createInvite_recipient {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface CreateInvite_createInvite_chat {
  __typename: "Chat";
  entityId: string;
  name: string;
  slug: string;
  expiration: number;
}

export interface CreateInvite_createInvite {
  __typename: "Invite";
  entityId: string;
  invitation: string;
  status: InviteStatus;
  createdAt: string;
  updatedAt: string;
  recipient: CreateInvite_createInvite_recipient;
  chat: CreateInvite_createInvite_chat;
}

export interface CreateInvite {
  createInvite: CreateInvite_createInvite;
}

export interface CreateInviteVariables {
  input: CreateInviteInput;
}
