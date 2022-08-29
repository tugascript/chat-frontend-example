import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { getClient } from "../gql/clients";
import {
  gqlAcceptInvite,
  gqlCreateInvite,
  gqlDeclineInvite,
  gqlDeleteInvite,
  gqlUpdateRejectedInvite,
} from "../gql/mutations";
import { gqlInviteById, gqlSentInviteByInvitation } from "../gql/queries";
import type {
  AcceptInvite,
  AcceptInvite_acceptInvite,
} from "../gql/__generated__/AcceptInvite";
import type {
  CreateInvite,
  CreateInvite_createInvite,
} from "../gql/__generated__/CreateInvite";
import type {
  DeclineInvite,
  DeclineInvite_declineInvite,
} from "../gql/__generated__/DeclineInvite";
import type {
  DeleteInvite,
  DeleteInvite_deleteInvite,
} from "../gql/__generated__/DeleteInvite";
import type {
  InviteById,
  InviteById_inviteById,
} from "../gql/__generated__/InviteById";
import type {
  InviteByInvitation,
  InviteByInvitation_inviteByInvitation,
} from "../gql/__generated__/InviteByInvitation";
import type {
  RecievedInvites,
  RecievedInvitesVariables,
  RecievedInvites_receivedInvites,
} from "../gql/__generated__/RecievedInvites";
import type {
  SentInviteById,
  SentInviteById_sentInviteById,
} from "../gql/__generated__/SentInviteById";
import type {
  SentInviteByInvitation,
  SentInviteByInvitation_sentInviteByInvitation,
} from "../gql/__generated__/SentInviteByInvitation";
import type {
  SentInvites,
  SentInvitesVariables,
  SentInvites_sentInvites,
} from "../gql/__generated__/SentInvites";
import type {
  UpdateRejectedInvite,
  UpdateRejectedInvite_updateRejectedInvite,
} from "../gql/__generated__/UpdateRejectedInvite";
import type { CreateInviteInput } from "../gql/__global__/globalTypes";

export const invitesApi = createApi({
  reducerPath: "invitesApi",
  baseQuery: graphqlRequestBaseQuery({
    client: getClient() as any,
  }),
  endpoints: (builder) => ({
    inviteById: builder.query<InviteById_inviteById, string>({
      query: (inviteId) => ({
        document: gqlInviteById,
        variables: { inviteId },
      }),
      transformResponse: (response: InviteById) => response.inviteById,
    }),
    sentInviteById: builder.query<SentInviteById_sentInviteById, string>({
      query: (inviteId) => ({
        document: gqlInviteById,
        variables: { inviteId },
      }),
      transformResponse: (response: SentInviteById) => response.sentInviteById,
    }),
    inviteByInvitation: builder.query<
      InviteByInvitation_inviteByInvitation,
      string
    >({
      query: (invitation) => ({
        document: gqlInviteById,
        variables: { invitation },
      }),
      transformResponse: (response: InviteByInvitation) =>
        response.inviteByInvitation,
    }),
    sentInviteByInvitation: builder.query<
      SentInviteByInvitation_sentInviteByInvitation,
      string
    >({
      query: (invitation) => ({
        document: gqlSentInviteByInvitation,
        variables: { invitation },
      }),
      transformResponse: (response: SentInviteByInvitation) =>
        response.sentInviteByInvitation,
    }),
    recievedInvites: builder.query<
      RecievedInvites_receivedInvites,
      RecievedInvitesVariables
    >({
      query: (variables) => ({
        document: gqlSentInviteByInvitation,
        variables,
      }),
      transformResponse: (response: RecievedInvites) =>
        response.receivedInvites,
    }),
    sentInvites: builder.query<SentInvites_sentInvites, SentInvitesVariables>({
      query: (variables) => ({
        document: gqlSentInviteByInvitation,
        variables,
      }),
      transformResponse: (response: SentInvites) => response.sentInvites,
    }),
    createInvite: builder.mutation<
      CreateInvite_createInvite,
      CreateInviteInput
    >({
      query: (input) => ({
        document: gqlCreateInvite,
        variables: { input },
      }),
      transformResponse: (response: CreateInvite) => response.createInvite,
    }),
    acceptInvite: builder.mutation<AcceptInvite_acceptInvite, string>({
      query: (invitation) => ({
        document: gqlAcceptInvite,
        variables: { invitation },
      }),
      transformResponse: (response: AcceptInvite) => response.acceptInvite,
    }),
    declineInvite: builder.mutation<DeclineInvite_declineInvite, string>({
      query: (invitation) => ({
        document: gqlDeclineInvite,
        variables: { invitation },
      }),
      transformResponse: (response: DeclineInvite) => response.declineInvite,
    }),
    updateRejectedInvite: builder.mutation<
      UpdateRejectedInvite_updateRejectedInvite,
      string
    >({
      query: (invitation) => ({
        document: gqlUpdateRejectedInvite,
        variables: { invitation },
      }),
      transformResponse: (response: UpdateRejectedInvite) =>
        response.updateRejectedInvite,
    }),
    deleteInvite: builder.mutation<DeleteInvite_deleteInvite, string>({
      query: (invitation) => ({
        document: gqlDeleteInvite,
        variables: { invitation },
      }),
      transformResponse: (response: DeleteInvite) => response.deleteInvite,
    }),
  }),
});

export const {
  useInviteByIdQuery,
  useSentInviteByIdQuery,
  useInviteByInvitationQuery,
  useSentInviteByInvitationQuery,
  useRecievedInvitesQuery,
  useSentInvitesQuery,
  useCreateInviteMutation,
  useAcceptInviteMutation,
  useDeclineInviteMutation,
  useUpdateRejectedInviteMutation,
  useDeleteInviteMutation,
} = invitesApi;
