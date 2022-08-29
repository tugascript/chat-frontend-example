import { createEntityAdapter } from "@reduxjs/toolkit";
import type { ChatById_chatById_messages_edges } from "../../gql/__generated__/ChatById";
import type { ChatBySlug_chatBySlug_messages_edges } from "../../gql/__generated__/ChatBySlug";
import type { MessageChange_messageChange_edge } from "../../gql/__generated__/MessageChange";

export const createMessageAdapter = () =>
  createEntityAdapter<
    | ChatBySlug_chatBySlug_messages_edges
    | ChatById_chatById_messages_edges
    | MessageChange_messageChange_edge
  >({
    selectId: (edge) => edge.cursor,
    sortComparer: (a, b) => b.node.createdAt.localeCompare(a.node.createdAt),
  });
