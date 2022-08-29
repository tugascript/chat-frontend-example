/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChatType, OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: ChatById
// ====================================================

export interface ChatById_chatById_author {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface ChatById_chatById_profiles_edges_node {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChatById_chatById_profiles_edges {
  __typename: "ProfileRedisEntityPageEdge";
  cursor: string;
  node: ChatById_chatById_profiles_edges_node;
}

export interface ChatById_chatById_profiles_pageInfo {
  __typename: "PageInfo";
  endCursor: string;
  startCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface ChatById_chatById_profiles {
  __typename: "PaginatedProfiles";
  edges: ChatById_chatById_profiles_edges[];
  pageInfo: ChatById_chatById_profiles_pageInfo;
  previousCount: number;
  currentCount: number;
}

export interface ChatById_chatById_messages_edges_node_profile {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChatById_chatById_messages_edges_node {
  __typename: "ChatMessage";
  entityId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  profile: ChatById_chatById_messages_edges_node_profile;
}

export interface ChatById_chatById_messages_edges {
  __typename: "ChatMessageRedisEntityPageEdge";
  cursor: string;
  node: ChatById_chatById_messages_edges_node;
}

export interface ChatById_chatById_messages_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
  startCursor: string;
}

export interface ChatById_chatById_messages {
  __typename: "PaginatedMessages";
  edges: ChatById_chatById_messages_edges[];
  pageInfo: ChatById_chatById_messages_pageInfo;
  currentCount: number;
  previousCount: number;
}

export interface ChatById_chatById {
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
  author: ChatById_chatById_author;
  profiles: ChatById_chatById_profiles;
  messages: ChatById_chatById_messages;
}

export interface ChatById {
  chatById: ChatById_chatById;
}

export interface ChatByIdVariables {
  chatId: string;
}
