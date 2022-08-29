import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { getClient } from "../gql/clients";
import { gqlCreateChat, gqlRemoveChat, gqlUpdateChat } from "../gql/mutations";
import {
  gqlChatById,
  gqlChatByInvitation,
  gqlChatBySlug,
  gqlMemberChats,
  gqlPublicChats,
  gqlUserChats,
} from "../gql/queries";
import type { ChatById } from "../gql/__generated__/ChatById";
import type {
  ChatByInvitation,
  ChatByInvitation_chatByInvitation,
} from "../gql/__generated__/ChatByInvitation";
import type { ChatBySlug } from "../gql/__generated__/ChatBySlug";
import type {
  CreateChat,
  CreateChat_createChat,
} from "../gql/__generated__/CreateChat";
import type {
  MemberChats,
  MemberChats_memberChats,
} from "../gql/__generated__/MemberChats";
import type {
  PublicChats,
  PublicChatsVariables,
  PublicChats_publicChats,
} from "../gql/__generated__/PublicChats";
import type {
  RemoveChat,
  RemoveChat_removeChat,
} from "../gql/__generated__/RemoveChat";
import type {
  UpdateChat,
  UpdateChat_updateChat,
} from "../gql/__generated__/UpdateChat";
import type {
  UserChats,
  UserChats_userChats,
} from "../gql/__generated__/UserChats";
import type {
  CreateChatInput,
  UpdateChatInput,
} from "../gql/__global__/globalTypes";
import { chatChangeSub } from "./helpers/chat-change-subscription";
import { createMessageAdapter } from "./helpers/create-message-adapter";
import { createProfilesAdapter } from "./helpers/create-profiles-adapter";
import { messageChangeSub } from "./helpers/message-change-subscription";
import { profileChangeSub } from "./helpers/profile-change-subscription";
import { IChat } from "./interfaces/chat-interface";

const idMessageEdgeAdapter = createMessageAdapter();
const slugMessageEdgeAdapter = createMessageAdapter();
const idProfileEdgeAdapter = createProfilesAdapter();
const slugProfileEdgeAdapter = createProfilesAdapter();

export const chatsApi = createApi({
  reducerPath: "chatsApi",
  baseQuery: graphqlRequestBaseQuery({
    client: getClient() as any,
  }),
  endpoints: (builder) => ({
    chatById: builder.query<IChat, string>({
      query: (chatId: string) => ({
        document: gqlChatById,
        variables: { chatId },
      }),
      transformResponse: (response: ChatById) => ({
        ...response.chatById,
        messages: {
          ...response.chatById.messages,
          edges: idMessageEdgeAdapter.addMany(
            idMessageEdgeAdapter.getInitialState(),
            response.chatById.messages.edges
          ),
        },
        profiles: {
          ...response.chatById.profiles,
          __typename: "PaginatedProfiles",
          edges: idProfileEdgeAdapter.addMany(
            idProfileEdgeAdapter.getInitialState(),
            response.chatById.profiles.edges
          ),
        },
        active: true,
      }),
      onCacheEntryAdded: async (
        chatId,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) => {
        try {
          await cacheDataLoaded;
          await messageChangeSub(
            chatId,
            updateCachedData,
            idMessageEdgeAdapter
          );
          await profileChangeSub(
            chatId,
            updateCachedData,
            idProfileEdgeAdapter
          );
          await chatChangeSub(chatId, updateCachedData);
        } catch (error) {}
        await cacheEntryRemoved;
      },
    }),
    chatBySlug: builder.query<IChat, string>({
      query: (slug: string) => ({
        document: gqlChatBySlug,
        variables: { slug },
      }),
      transformResponse: (response: ChatBySlug) => ({
        ...response.chatBySlug,
        messages: {
          ...response.chatBySlug.messages,
          edges: slugMessageEdgeAdapter.addMany(
            slugMessageEdgeAdapter.getInitialState(),
            response.chatBySlug.messages.edges
          ),
        },
        profiles: {
          ...response.chatBySlug.profiles,
          edges: slugProfileEdgeAdapter.addMany(
            slugProfileEdgeAdapter.getInitialState(),
            response.chatBySlug.profiles.edges
          ),
        },
        active: true,
      }),
      onCacheEntryAdded: async (
        _,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) => {
        try {
          const chatId = (await cacheDataLoaded).data.entityId;
          await messageChangeSub(
            chatId,
            updateCachedData,
            idMessageEdgeAdapter
          );
          await profileChangeSub(
            chatId,
            updateCachedData,
            idProfileEdgeAdapter
          );
          await chatChangeSub(chatId, updateCachedData);
        } catch (error) {}
        await cacheEntryRemoved;
      },
    }),
    chatByInvitation: builder.query<ChatByInvitation_chatByInvitation, string>({
      query: (invitation: string) => ({
        document: gqlChatByInvitation,
        variables: { invitation },
      }),
      transformResponse: (response: ChatByInvitation) =>
        response.chatByInvitation,
    }),
    publicChats: builder.query<PublicChats_publicChats, PublicChatsVariables>({
      query: (variables: PublicChatsVariables) => ({
        document: gqlPublicChats,
        variables,
      }),
      transformResponse: (response: PublicChats) => response.publicChats,
    }),
    userChats: builder.query<UserChats_userChats[], void>({
      query: () => ({
        document: gqlUserChats,
      }),
      transformResponse: (response: UserChats) => response.userChats,
    }),
    memberChats: builder.query<MemberChats_memberChats[], void>({
      query: () => ({
        document: gqlMemberChats,
      }),
      transformResponse: (response: MemberChats) => response.memberChats,
    }),
    createChat: builder.mutation<CreateChat_createChat, CreateChatInput>({
      query: (input: CreateChatInput) => ({
        document: gqlCreateChat,
        variables: { input },
      }),
      transformResponse: (response: CreateChat) => response.createChat,
    }),
    updateChat: builder.mutation<UpdateChat_updateChat, UpdateChatInput>({
      query: (input: UpdateChatInput) => ({
        document: gqlUpdateChat,
        variables: { input },
      }),
      transformResponse: (response: UpdateChat) => response.updateChat,
    }),
    removeChat: builder.mutation<RemoveChat_removeChat, string>({
      query: (chatId: string) => ({
        document: gqlRemoveChat,
        variables: { chatId },
      }),
      transformResponse: (response: RemoveChat) => response.removeChat,
    }),
  }),
});

export const {
  useChatByIdQuery,
  useLazyChatByIdQuery,
  useChatBySlugQuery,
  useLazyChatBySlugQuery,
  useLazyChatByInvitationQuery,
  usePublicChatsQuery,
  useLazyPublicChatsQuery,
  useUserChatsQuery,
  useMemberChatsQuery,
  useCreateChatMutation,
  useUpdateChatMutation,
  useRemoveChatMutation,
} = chatsApi;
