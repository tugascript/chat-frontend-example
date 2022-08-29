import type { EntityState } from "@reduxjs/toolkit";
import type {
  ChatById_chatById_author,
  ChatById_chatById_messages_edges,
  ChatById_chatById_messages_pageInfo,
  ChatById_chatById_profiles_edges,
} from "../../gql/__generated__/ChatById";
import type {
  ChatBySlug_chatBySlug_author,
  ChatBySlug_chatBySlug_messages_edges,
  ChatBySlug_chatBySlug_messages_pageInfo,
  ChatBySlug_chatBySlug_profiles_edges,
  ChatBySlug_chatBySlug_profiles_pageInfo,
} from "../../gql/__generated__/ChatBySlug";
import type { MessageChange_messageChange_edge } from "../../gql/__generated__/MessageChange";
import type { ProfileChange_profileChange_edge } from "../../gql/__generated__/ProfileChange";
import type { ChatType } from "../../gql/__global__/globalTypes";

export interface IPaginatedMessages {
  __typename: "PaginatedMessages";
  edges: EntityState<
    | ChatBySlug_chatBySlug_messages_edges
    | ChatById_chatById_messages_edges
    | MessageChange_messageChange_edge
  >;
  pageInfo:
    | ChatBySlug_chatBySlug_messages_pageInfo
    | ChatById_chatById_messages_pageInfo;
  currentCount: number;
  previousCount: number;
}

export interface IPaginatedProfiles {
  __typename: "PaginatedProfiles";
  edges: EntityState<
    | ChatBySlug_chatBySlug_profiles_edges
    | ChatById_chatById_profiles_edges
    | ProfileChange_profileChange_edge
  >;
  pageInfo: ChatBySlug_chatBySlug_profiles_pageInfo;
  previousCount: number;
  currentCount: number;
}

export interface IChat {
  __typename: "Chat";
  entityId: string;
  slug: string;
  name: string;
  chatType: ChatType;
  createdAt: any;
  updatedAt: any;
  expiration: number;
  invitation: string | null;
  profilesCount: number;
  author: ChatBySlug_chatBySlug_author | ChatById_chatById_author;
  profiles: IPaginatedProfiles;
  messages: IPaginatedMessages;
  active: boolean;
}
