/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: ProfileBySlug
// ====================================================

export interface ProfileBySlug_profileBySlug_user {
  __typename: "User";
  id: string;
  name: string;
  username: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface ProfileBySlug_profileBySlug {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  user: ProfileBySlug_profileBySlug_user;
}

export interface ProfileBySlug {
  profileBySlug: ProfileBySlug_profileBySlug;
}

export interface ProfileBySlugVariables {
  chatId: string;
  slug: string;
}
