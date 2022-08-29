/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InviteStatus } from "./../__global__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeclineInvite
// ====================================================

export interface DeclineInvite_declineInvite {
  __typename: "Invite";
  entityId: string;
  invitation: string;
  status: InviteStatus;
  createdAt: string;
  updatedAt: string;
}

export interface DeclineInvite {
  declineInvite: DeclineInvite_declineInvite;
}

export interface DeclineInviteVariables {
  invitation: string;
}
