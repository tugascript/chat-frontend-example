import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { getClient } from "../gql/clients";
import {
  gqlCreateMessage,
  gqlRemoveMessage,
  gqlUpdateMessage,
} from "../gql/mutations";
import { gqlChatMessages, gqlMessageById } from "../gql/queries";
import type {
  ChatMessages,
  ChatMessagesVariables,
  ChatMessages_chatMessages,
} from "../gql/__generated__/ChatMessages";
import type {
  CreateMessage,
  CreateMessage_createMessage,
} from "../gql/__generated__/CreateMessage";
import type {
  MessageById,
  MessageByIdVariables,
  MessageById_messageById,
} from "../gql/__generated__/MessageById";
import type {
  RemoveMessage,
  RemoveMessageVariables,
  RemoveMessage_removeMessage,
} from "../gql/__generated__/RemoveMessage";
import type {
  UpdateMessage,
  UpdateMessage_updateMessage,
} from "../gql/__generated__/UpdateMessage";
import type {
  CreateMessageInput,
  UpdateMessageInput,
} from "../gql/__global__/globalTypes";

export const messagesApi = createApi({
  reducerPath: "messagesApi",
  baseQuery: graphqlRequestBaseQuery({
    client: getClient() as any,
  }),
  endpoints: (builder) => ({
    chatMessages: builder.query<
      ChatMessages_chatMessages,
      ChatMessagesVariables
    >({
      query: (variables) => ({
        document: gqlChatMessages,
        variables,
      }),
      transformResponse: (response: ChatMessages) => response.chatMessages,
    }),
    messageById: builder.query<MessageById_messageById, MessageByIdVariables>({
      query: (variables) => ({
        document: gqlMessageById,
        variables,
      }),
      transformResponse: (response: MessageById) => response.messageById,
    }),
    createMessage: builder.mutation<
      CreateMessage_createMessage,
      CreateMessageInput
    >({
      query: (input) => ({
        document: gqlCreateMessage,
        variables: { input },
      }),
      transformResponse: (response: CreateMessage) => response.createMessage,
    }),
    updateMessage: builder.mutation<
      UpdateMessage_updateMessage,
      UpdateMessageInput
    >({
      query: (input) => ({
        document: gqlUpdateMessage,
        variables: { input },
      }),
      transformResponse: (response: UpdateMessage) => response.updateMessage,
    }),
    removeMessage: builder.mutation<
      RemoveMessage_removeMessage,
      RemoveMessageVariables
    >({
      query: (variables) => ({
        document: gqlRemoveMessage,
        variables,
      }),
      transformResponse: (response: RemoveMessage) => response.removeMessage,
    }),
  }),
});

export const {
  useChatMessagesQuery,
  useMessageByIdQuery,
  useCreateMessageMutation,
  useUpdateMessageMutation,
  useRemoveMessageMutation,
} = messagesApi;
