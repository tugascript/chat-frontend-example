import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { getClient } from "../gql/clients";
import {
  gqlCreateProfile,
  gqlLeaveChat,
  gqlRemoveProfile,
  gqlUpdateOwnNickname,
  gqlUpdateProfileNickname,
} from "../gql/mutations";
import {
  gqlChatProfiles,
  gqlProfileById,
  gqlProfileBySlug,
} from "../gql/queries";
import type {
  ChatProfiles,
  ChatProfilesVariables,
  ChatProfiles_chatProfiles,
} from "../gql/__generated__/ChatProfiles";
import type {
  CreateProfile,
  CreateProfile_createProfile,
} from "../gql/__generated__/CreateProfile";
import type {
  LeaveChat,
  LeaveChat_leaveChat,
} from "../gql/__generated__/LeaveChat";
import type {
  ProfileById,
  ProfileByIdVariables,
  ProfileById_profileById,
} from "../gql/__generated__/ProfileById";
import type {
  ProfileBySlug,
  ProfileBySlugVariables,
  ProfileBySlug_profileBySlug,
} from "../gql/__generated__/ProfileBySlug";
import type {
  RemoveProfile,
  RemoveProfileVariables,
  RemoveProfile_removeProfile,
} from "../gql/__generated__/RemoveProfile";
import type {
  UpdateOwnNickname,
  UpdateOwnNickname_updateOwnNickname,
} from "../gql/__generated__/UpdateOwnNickname";
import type {
  UpdateProfileNickname,
  UpdateProfileNickname_updateProfileNickname,
} from "../gql/__generated__/UpdateProfileNickname";
import type {
  UpdateNicknameInput,
  UpdateProfileNicknameInput,
} from "../gql/__global__/globalTypes";

export const profilesApi = createApi({
  reducerPath: "profilesApi",
  baseQuery: graphqlRequestBaseQuery({
    client: getClient() as any,
  }),
  endpoints: (builder) => ({
    profileById: builder.query<ProfileById_profileById, ProfileByIdVariables>({
      query: (variables) => ({
        document: gqlProfileById,
        variables,
      }),
      transformResponse: (response: ProfileById) => response.profileById,
    }),
    profileBySlug: builder.query<
      ProfileBySlug_profileBySlug,
      ProfileBySlugVariables
    >({
      query: (variables) => ({
        document: gqlProfileBySlug,
        variables,
      }),
      transformResponse: (response: ProfileBySlug) => response.profileBySlug,
    }),
    chatProfiles: builder.query<
      ChatProfiles_chatProfiles,
      ChatProfilesVariables
    >({
      query: (variables) => ({
        document: gqlChatProfiles,
        variables,
      }),
      transformResponse: (response: ChatProfiles) => response.chatProfiles,
    }),
    createProfile: builder.mutation<CreateProfile_createProfile, string>({
      query: (invitation) => ({
        document: gqlCreateProfile,
        variables: { invitation },
      }),
      transformResponse: (response: CreateProfile) => response.createProfile,
    }),
    updateProfileNickname: builder.mutation<
      UpdateProfileNickname_updateProfileNickname,
      UpdateProfileNicknameInput
    >({
      query: (input) => ({
        document: gqlUpdateProfileNickname,
        variables: { input },
      }),
      transformResponse: (response: UpdateProfileNickname) =>
        response.updateProfileNickname,
    }),
    updateOwnNickname: builder.mutation<
      UpdateOwnNickname_updateOwnNickname,
      UpdateNicknameInput
    >({
      query: (input) => ({
        document: gqlUpdateOwnNickname,
        variables: { input },
      }),
      transformResponse: (response: UpdateOwnNickname) =>
        response.updateOwnNickname,
    }),
    leaveChat: builder.mutation<LeaveChat_leaveChat, string>({
      query: (chatId) => ({
        document: gqlLeaveChat,
        variables: { chatId },
      }),
      transformResponse: (response: LeaveChat) => response.leaveChat,
    }),
    removeProfile: builder.mutation<
      RemoveProfile_removeProfile,
      RemoveProfileVariables
    >({
      query: (variables) => ({
        document: gqlRemoveProfile,
        variables,
      }),
      transformResponse: (response: RemoveProfile) => response.removeProfile,
    }),
  }),
});

export const {
  useProfileByIdQuery,
  useProfileBySlugQuery,
  useChatProfilesQuery,
  useCreateProfileMutation,
  useUpdateProfileNicknameMutation,
  useUpdateOwnNicknameMutation,
  useLeaveChatMutation,
  useRemoveProfileMutation,
} = profilesApi;
