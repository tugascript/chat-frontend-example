/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InviteStatus, OnlineStatus, ChatType } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: SentInviteByInvitation
// ====================================================

export interface SentInviteByInvitation_sentInviteByInvitation_recipient {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface SentInviteByInvitation_sentInviteByInvitation_chat_author {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface SentInviteByInvitation_sentInviteByInvitation_chat {
  __typename: "Chat";
  entityId: string;
  slug: string;
  name: string;
  chatType: ChatType;
  expiration: number;
  profilesCount: number;
  author: SentInviteByInvitation_sentInviteByInvitation_chat_author;
}

export interface SentInviteByInvitation_sentInviteByInvitation {
  __typename: "Invite";
  entityId: string;
  invitation: string;
  status: InviteStatus;
  createdAt: string;
  updatedAt: string;
  recipient: SentInviteByInvitation_sentInviteByInvitation_recipient;
  chat: SentInviteByInvitation_sentInviteByInvitation_chat;
}

export interface SentInviteByInvitation {
  sentInviteByInvitation: SentInviteByInvitation_sentInviteByInvitation;
}

export interface SentInviteByInvitationVariables {
  invitation: string;
}
