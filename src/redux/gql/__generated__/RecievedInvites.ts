/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InviteStatus, OnlineStatus, ChatType } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: RecievedInvites
// ====================================================

export interface RecievedInvites_receivedInvites_edges_node_sender {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface RecievedInvites_receivedInvites_edges_node_chat_author {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface RecievedInvites_receivedInvites_edges_node_chat {
  __typename: "Chat";
  entityId: string;
  slug: string;
  name: string;
  chatType: ChatType;
  expiration: number;
  profilesCount: number;
  author: RecievedInvites_receivedInvites_edges_node_chat_author;
}

export interface RecievedInvites_receivedInvites_edges_node {
  __typename: "Invite";
  entityId: string;
  invitation: string;
  status: InviteStatus;
  createdAt: string;
  updatedAt: string;
  sender: RecievedInvites_receivedInvites_edges_node_sender;
  chat: RecievedInvites_receivedInvites_edges_node_chat;
}

export interface RecievedInvites_receivedInvites_edges {
  __typename: "InviteRedisEntityPageEdge";
  cursor: string;
  node: RecievedInvites_receivedInvites_edges_node;
}

export interface RecievedInvites_receivedInvites_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
  startCursor: string;
}

export interface RecievedInvites_receivedInvites {
  __typename: "PaginatedInvites";
  edges: RecievedInvites_receivedInvites_edges[];
  pageInfo: RecievedInvites_receivedInvites_pageInfo;
  currentCount: number;
  previousCount: number;
}

export interface RecievedInvites {
  receivedInvites: RecievedInvites_receivedInvites;
}

export interface RecievedInvitesVariables {
  after?: string | null;
  first?: number | null;
  status?: InviteStatus | null;
}
