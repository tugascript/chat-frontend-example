import { EntityAdapter } from "@reduxjs/toolkit";
import type {
  PatchCollection,
  Recipe,
} from "@reduxjs/toolkit/dist/query/core/buildThunks";
import { getWsClient } from "../../gql/clients";
import { gqlMessageChange } from "../../gql/subscriptions";
import type { ChatById_chatById_messages_edges } from "../../gql/__generated__/ChatById";
import type { ChatBySlug_chatBySlug_messages_edges } from "../../gql/__generated__/ChatBySlug";
import type {
  MessageChange,
  MessageChangeVariables,
  MessageChange_messageChange_edge,
} from "../../gql/__generated__/MessageChange";
import { ChangeType } from "../../gql/__global__/globalTypes";
import type { IChat } from "../interfaces/chat-interface";

export const messageChangeSub = async (
  chatId: string,
  updateCachedData: (recipe: Recipe<IChat>) => PatchCollection,
  adapter: EntityAdapter<
    | ChatBySlug_chatBySlug_messages_edges
    | ChatById_chatById_messages_edges
    | MessageChange_messageChange_edge
  >
): Promise<null> => {
  return new Promise((resolve, reject) => {
    console.log("Inside pubsub");
    getWsClient().subscribe<MessageChange, MessageChangeVariables>(
      {
        query: gqlMessageChange,
        variables: { chatId },
      },
      {
        next: (result) => {
          if (result.data) {
            const data = result.data.messageChange;

            switch (data.type) {
              case ChangeType.NEW:
                updateCachedData((draft) => {
                  draft.messages.edges = adapter.addOne(
                    draft.messages.edges,
                    data.edge
                  );
                  return draft;
                });
                break;
              case ChangeType.UPDATE:
                updateCachedData((draft) => {
                  draft.messages.edges = adapter.upsertOne(
                    draft.messages.edges,
                    data.edge
                  );
                  return draft;
                });
                break;
              case ChangeType.DELETE:
                updateCachedData((draft) => {
                  draft.messages.edges = adapter.removeOne(
                    draft.messages.edges,
                    data.edge.cursor
                  );
                  return draft;
                });
                break;
            }
          }
        },
        error: reject,
        complete: () => resolve(null),
      }
    );
  });
};
