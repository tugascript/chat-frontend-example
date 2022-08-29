/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChatType, OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: PublicChats
// ====================================================

export interface PublicChats_publicChats_edges_node_author {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface PublicChats_publicChats_edges_node {
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
  isMember: boolean;
  author: PublicChats_publicChats_edges_node_author;
}

export interface PublicChats_publicChats_edges {
  __typename: "ChatRedisEntityPageEdge";
  cursor: string;
  node: PublicChats_publicChats_edges_node;
}

export interface PublicChats_publicChats_pageInfo {
  __typename: "PageInfo";
  endCursor: string;
  startCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PublicChats_publicChats {
  __typename: "PaginatedChats";
  edges: PublicChats_publicChats_edges[];
  currentCount: number;
  previousCount: number;
  pageInfo: PublicChats_publicChats_pageInfo;
}

export interface PublicChats {
  publicChats: PublicChats_publicChats;
}

export interface PublicChatsVariables {
  search?: string | null;
  after?: string | null;
  first?: number | null;
}
