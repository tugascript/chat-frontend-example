/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChangeType } from "./../__global__/globalTypes";

// ====================================================
// GraphQL subscription operation: MessageChange
// ====================================================

export interface MessageChange_messageChange_edge_node_profile {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface MessageChange_messageChange_edge_node {
  __typename: "ChatMessage";
  entityId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  profile: MessageChange_messageChange_edge_node_profile;
}

export interface MessageChange_messageChange_edge {
  __typename: "ChatMessageRedisEntityChangeEdge";
  cursor: string;
  node: MessageChange_messageChange_edge_node;
}

export interface MessageChange_messageChange {
  __typename: "MessageChange";
  type: ChangeType;
  edge: MessageChange_messageChange_edge;
}

export interface MessageChange {
  messageChange: MessageChange_messageChange;
}

export interface MessageChangeVariables {
  chatId: string;
}
