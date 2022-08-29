/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChatType, OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: ChatByInvitation
// ====================================================

export interface ChatByInvitation_chatByInvitation_author {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface ChatByInvitation_chatByInvitation {
  __typename: "Chat";
  entityId: string;
  slug: string;
  name: string;
  chatType: ChatType;
  createdAt: string;
  updatedAt: string;
  expiration: number;
  invitation: string;
  profilesCount: number;
  isMember: boolean;
  author: ChatByInvitation_chatByInvitation_author;
}

export interface ChatByInvitation {
  chatByInvitation: ChatByInvitation_chatByInvitation;
}

export interface ChatByInvitationVariables {
  invitation: string;
}
