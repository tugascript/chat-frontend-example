/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: UserById
// ====================================================

export interface UserById_userById {
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

export interface UserById {
  userById: UserById_userById;
}

export interface UserByIdVariables {
  userId: string;
}
