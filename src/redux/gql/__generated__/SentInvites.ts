/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InviteStatus, OnlineStatus, ChatType } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: SentInvites
// ====================================================

export interface SentInvites_sentInvites_edges_node_recipient {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface SentInvites_sentInvites_edges_node_chat_author {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface SentInvites_sentInvites_edges_node_chat {
  __typename: "Chat";
  entityId: string;
  slug: string;
  name: string;
  chatType: ChatType;
  expiration: number;
  profilesCount: number;
  author: SentInvites_sentInvites_edges_node_chat_author;
}

export interface SentInvites_sentInvites_edges_node {
  __typename: "Invite";
  entityId: string;
  invitation: string;
  status: InviteStatus;
  createdAt: string;
  updatedAt: string;
  recipient: SentInvites_sentInvites_edges_node_recipient;
  chat: SentInvites_sentInvites_edges_node_chat;
}

export interface SentInvites_sentInvites_edges {
  __typename: "InviteRedisEntityPageEdge";
  cursor: string;
  node: SentInvites_sentInvites_edges_node;
}

export interface SentInvites_sentInvites_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
  startCursor: string;
}

export interface SentInvites_sentInvites {
  __typename: "PaginatedInvites";
  edges: SentInvites_sentInvites_edges[];
  pageInfo: SentInvites_sentInvites_pageInfo;
  currentCount: number;
  previousCount: number;
}

export interface SentInvites {
  sentInvites: SentInvites_sentInvites;
}

export interface SentInvitesVariables {
  after?: string | null;
  first?: number | null;
  status?: InviteStatus | null;
}
