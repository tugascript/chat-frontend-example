import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { getClient } from "../gql/clients";
import {
  gqlDeleteAccount,
  gqlUpdateAccountDescription,
  gqlUpdateOnlineStatus,
} from "../gql/mutations";
import {
  gqlMe,
  gqlUserById,
  gqlUserByUsername,
  gqlUsers,
} from "../gql/queries";
import {
  DeleteAccount,
  DeleteAccount_deleteAccount,
} from "../gql/__generated__/DeleteAccount";
import { Me, Me_me } from "../gql/__generated__/Me";
import {
  UpdateAccountDescription,
  UpdateAccountDescription_updateAccountDescription,
} from "../gql/__generated__/UpdateAccountDescription";
import {
  UpdateOnlineStatus,
  UpdateOnlineStatus_updateOnlineStatus,
} from "../gql/__generated__/UpdateOnlineStatus";
import { UserById, UserById_userById } from "../gql/__generated__/UserById";
import {
  UserByUsername,
  UserByUsername_userByUsername,
} from "../gql/__generated__/UserByUsername";
import { Users, UsersVariables, Users_users } from "../gql/__generated__/Users";
import { OnlineStatus } from "../gql/__global__/globalTypes";

export const accountsApi = createApi({
  reducerPath: "accountsApi",
  baseQuery: graphqlRequestBaseQuery({
    client: getClient() as any,
  }),
  endpoints: (builder) => ({
    userById: builder.query<UserById_userById, string>({
      query: (userId) => ({
        document: gqlUserById,
        variables: { userId },
      }),
      transformResponse: (response: UserById) => response.userById,
    }),
    userByUsername: builder.query<UserByUsername_userByUsername, string>({
      query: (username) => ({
        document: gqlUserByUsername,
        variables: { username },
      }),
      transformResponse: (response: UserByUsername) => response.userByUsername,
    }),
    me: builder.query<Me_me, void>({
      query: () => ({
        document: gqlMe,
      }),
      transformResponse: (response: Me) => response.me,
    }),
    users: builder.query<Users_users, UsersVariables>({
      query: (variables) => ({
        document: gqlUsers,
        variables,
      }),
      transformResponse: (response: Users) => response.users,
    }),
    updateAccountDescription: builder.mutation<
      UpdateAccountDescription_updateAccountDescription,
      string
    >({
      query: (description) => ({
        document: gqlUpdateAccountDescription,
        variables: { description },
      }),
      transformResponse: (response: UpdateAccountDescription) =>
        response.updateAccountDescription,
    }),
    updateOnlineStatus: builder.mutation<
      UpdateOnlineStatus_updateOnlineStatus,
      OnlineStatus
    >({
      query: (defaultStatus) => ({
        document: gqlUpdateOnlineStatus,
        variables: { defaultStatus },
      }),
      transformResponse: (response: UpdateOnlineStatus) =>
        response.updateOnlineStatus,
    }),
    deleteAccount: builder.mutation<DeleteAccount_deleteAccount, string>({
      query: (password) => ({
        document: gqlDeleteAccount,
        variables: { password },
      }),
      transformResponse: (response: DeleteAccount) => response.deleteAccount,
    }),
  }),
});

export const accountsApiEndpoints = accountsApi.endpoints;
export const {
  useUserByIdQuery,
  useUserByUsernameQuery,
  useMeQuery,
  useLazyMeQuery,
  useUsersQuery,
  useLazyUsersQuery,
  useUpdateAccountDescriptionMutation,
  useUpdateOnlineStatusMutation,
  useDeleteAccountMutation,
} = accountsApi;
