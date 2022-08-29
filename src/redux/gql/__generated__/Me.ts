/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me {
  __typename: "User";
  id: string;
  name: string;
  username: string;
  email: string | null;
  onlineStatus: OnlineStatus;
  defaultStatus: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Me {
  me: Me_me;
}
