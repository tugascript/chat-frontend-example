/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: ProfileById
// ====================================================

export interface ProfileById_profileById_user {
  __typename: "User";
  id: string;
  name: string;
  username: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
}

export interface ProfileById_profileById {
  __typename: "Profile";
  entityId: string;
  nickname: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  user: ProfileById_profileById_user;
}

export interface ProfileById {
  profileById: ProfileById_profileById;
}

export interface ProfileByIdVariables {
  chatId: string;
  profileId: string;
}
