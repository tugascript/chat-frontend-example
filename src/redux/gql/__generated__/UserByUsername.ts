/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: UserByUsername
// ====================================================

export interface UserByUsername_userByUsername {
  __typename: "User";
  id: string;
  name: string;
  username: string;
  onlineStatus: OnlineStatus;
  lastOnline: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface UserByUsername {
  userByUsername: UserByUsername_userByUsername;
}

export interface UserByUsernameVariables {
  username: string;
}
