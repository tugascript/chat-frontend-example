/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InviteStatus, OnlineStatus, ChatType } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: InviteByInvitation
// ====================================================

export interface InviteByInvitation_inviteByInvitation_sender {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface InviteByInvitation_inviteByInvitation_chat_author {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface InviteByInvitation_inviteByInvitation_chat {
  __typename: "Chat";
  entityId: string;
  slug: string;
  name: string;
  chatType: ChatType;
  createdAt: string;
  updatedAt: string;
  expiration: number;
  profilesCount: number;
  author: InviteByInvitation_inviteByInvitation_chat_author;
}

export interface InviteByInvitation_inviteByInvitation {
  __typename: "Invite";
  entityId: string;
  invitation: string;
  status: InviteStatus;
  createdAt: string;
  updatedAt: string;
  sender: InviteByInvitation_inviteByInvitation_sender;
  chat: InviteByInvitation_inviteByInvitation_chat;
}

export interface InviteByInvitation {
  inviteByInvitation: InviteByInvitation_inviteByInvitation;
}

export interface InviteByInvitationVariables {
  invitation: string;
}
