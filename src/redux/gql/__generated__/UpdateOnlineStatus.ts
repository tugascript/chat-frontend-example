/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OnlineStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateOnlineStatus
// ====================================================

export interface UpdateOnlineStatus_updateOnlineStatus {
  __typename: "User";
  id: string;
  name: string;
  username: string;
  defaultStatus: string | null;
  onlineStatus: OnlineStatus;
  updatedAt: string;
}

export interface UpdateOnlineStatus {
  updateOnlineStatus: UpdateOnlineStatus_updateOnlineStatus;
}

export interface UpdateOnlineStatusVariables {
  defaultStatus: OnlineStatus;
}
