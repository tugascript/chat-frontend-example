/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: Users
// ====================================================

export interface Users_users_edges_node {
  __typename: "User";
  id: string;
  name: string;
  username: string;
  onlineStatus: OnlineStatus;
  createdAt: string;
}

export interface Users_users_edges {
  __typename: "UserEntityPageEdge";
  cursor: string;
  node: Users_users_edges_node;
}

export interface Users_users_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

export interface Users_users {
  __typename: "PaginatedUsers";
  edges: Users_users_edges[];
  pageInfo: Users_users_pageInfo;
  currentCount: number;
  previousCount: number;
}

export interface Users {
  users: Users_users;
}

export interface UsersVariables {
  search?: string | null;
  after?: string | null;
  first?: number | null;
}
