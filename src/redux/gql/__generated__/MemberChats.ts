/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChatType, OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: MemberChats
// ====================================================

export interface MemberChats_memberChats_author {
  __typename: "User";
  id: string;
  name: string;
  username: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface MemberChats_memberChats {
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
  author: MemberChats_memberChats_author;
}

export interface MemberChats {
  memberChats: MemberChats_memberChats[];
}
