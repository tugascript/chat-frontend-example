/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChatProfiles
// ====================================================

export interface ChatProfiles_chatProfiles_edges_node {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChatProfiles_chatProfiles_edges {
  __typename: "ProfileRedisEntityPageEdge";
  cursor: string;
  node: ChatProfiles_chatProfiles_edges_node;
}

export interface ChatProfiles_chatProfiles_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

export interface ChatProfiles_chatProfiles {
  __typename: "PaginatedProfiles";
  edges: ChatProfiles_chatProfiles_edges[];
  pageInfo: ChatProfiles_chatProfiles_pageInfo;
  currentCount: number;
  previousCount: number;
}

export interface ChatProfiles {
  chatProfiles: ChatProfiles_chatProfiles;
}

export interface ChatProfilesVariables {
  after?: string | null;
  nickname?: string | null;
  chatId: string;
  first?: number | null;
}
