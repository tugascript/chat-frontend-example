/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChatMessages
// ====================================================

export interface ChatMessages_chatMessages_edges_node_profile {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
}

export interface ChatMessages_chatMessages_edges_node {
  __typename: "ChatMessage";
  entityId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  profile: ChatMessages_chatMessages_edges_node_profile;
}

export interface ChatMessages_chatMessages_edges {
  __typename: "ChatMessageRedisEntityPageEdge";
  cursor: string;
  node: ChatMessages_chatMessages_edges_node;
}

export interface ChatMessages_chatMessages_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
  startCursor: string;
}

export interface ChatMessages_chatMessages {
  __typename: "PaginatedMessages";
  edges: ChatMessages_chatMessages_edges[];
  pageInfo: ChatMessages_chatMessages_pageInfo;
  currentCount: number;
  previousCount: number;
}

export interface ChatMessages {
  chatMessages: ChatMessages_chatMessages;
}

export interface ChatMessagesVariables {
  after?: string | null;
  chatId: string;
  first?: number | null;
}
