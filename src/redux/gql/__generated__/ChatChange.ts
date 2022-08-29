/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChangeType, ChatType, OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL subscription operation: ChatChange
// ====================================================

export interface ChatChange_chatChange_edge_node_author {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface ChatChange_chatChange_edge_node {
  __typename: "Chat";
  entityId: string;
  slug: string;
  name: string;
  chatType: ChatType;
  createdAt: string;
  updatedAt: string;
  expiration: number;
  profilesCount: number;
  author: ChatChange_chatChange_edge_node_author;
}

export interface ChatChange_chatChange_edge {
  __typename: "ChatRedisEntityChangeEdge";
  cursor: string;
  node: ChatChange_chatChange_edge_node;
}

export interface ChatChange_chatChange {
  __typename: "ChatChange";
  type: ChangeType;
  edge: ChatChange_chatChange_edge;
}

export interface ChatChange {
  chatChange: ChatChange_chatChange;
}

export interface ChatChangeVariables {
  chatId: string;
}
