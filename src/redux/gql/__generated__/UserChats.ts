/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChatType } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: UserChats
// ====================================================

export interface UserChats_userChats {
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
}

export interface UserChats {
  userChats: UserChats_userChats[];
}
