/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChatType, OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: ChatBySlug
// ====================================================

export interface ChatBySlug_chatBySlug_author {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface ChatBySlug_chatBySlug_profiles_edges_node {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChatBySlug_chatBySlug_profiles_edges {
  __typename: "ProfileRedisEntityPageEdge";
  cursor: string;
  node: ChatBySlug_chatBySlug_profiles_edges_node;
}

export interface ChatBySlug_chatBySlug_profiles_pageInfo {
  __typename: "PageInfo";
  endCursor: string;
  startCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface ChatBySlug_chatBySlug_profiles {
  __typename: "PaginatedProfiles";
  edges: ChatBySlug_chatBySlug_profiles_edges[];
  pageInfo: ChatBySlug_chatBySlug_profiles_pageInfo;
  previousCount: number;
  currentCount: number;
}

export interface ChatBySlug_chatBySlug_messages_edges_node_profile {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChatBySlug_chatBySlug_messages_edges_node {
  __typename: "ChatMessage";
  entityId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  profile: ChatBySlug_chatBySlug_messages_edges_node_profile;
}

export interface ChatBySlug_chatBySlug_messages_edges {
  __typename: "ChatMessageRedisEntityPageEdge";
  cursor: string;
  node: ChatBySlug_chatBySlug_messages_edges_node;
}

export interface ChatBySlug_chatBySlug_messages_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
  startCursor: string;
}

export interface ChatBySlug_chatBySlug_messages {
  __typename: "PaginatedMessages";
  edges: ChatBySlug_chatBySlug_messages_edges[];
  pageInfo: ChatBySlug_chatBySlug_messages_pageInfo;
  currentCount: number;
  previousCount: number;
}

export interface ChatBySlug_chatBySlug {
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
  author: ChatBySlug_chatBySlug_author;
  profiles: ChatBySlug_chatBySlug_profiles;
  messages: ChatBySlug_chatBySlug_messages;
}

export interface ChatBySlug {
  chatBySlug: ChatBySlug_chatBySlug;
}

export interface ChatBySlugVariables {
  slug: string;
}
