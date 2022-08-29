/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChangeType } from "./../__global__/globalTypes";

// ====================================================
// GraphQL subscription operation: ProfileChange
// ====================================================

export interface ProfileChange_profileChange_edge_node {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProfileChange_profileChange_edge {
  __typename: "ProfileRedisEntityChangeEdge";
  cursor: string;
  node: ProfileChange_profileChange_edge_node;
}

export interface ProfileChange_profileChange {
  __typename: "ProfileChange";
  type: ChangeType;
  edge: ProfileChange_profileChange_edge;
}

export interface ProfileChange {
  profileChange: ProfileChange_profileChange;
}

export interface ProfileChangeVariables {
  chatId: string;
}
