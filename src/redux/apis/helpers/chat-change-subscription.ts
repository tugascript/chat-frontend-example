import type {
  Recipe,
  PatchCollection,
} from "@reduxjs/toolkit/dist/query/core/buildThunks";
import { getWsClient } from "../../gql/clients";
import { gqlChatChange } from "../../gql/subscriptions";
import {
  ChatChange,
  ChatChangeVariables,
} from "../../gql/__generated__/ChatChange";
import { ChangeType } from "../../gql/__global__/globalTypes";
import type { IChat } from "../interfaces/chat-interface";

export const chatChangeSub = async (
  chatId: string,
  updateCachedData: (recipe: Recipe<IChat>) => PatchCollection
): Promise<null> => {
  return new Promise((resolve, reject) => {
    getWsClient().subscribe<ChatChange, ChatChangeVariables>(
      {
        query: gqlChatChange,
        variables: { chatId },
      },
      {
        next: (result) => {
          if (result.data) {
            const data = result.data.chatChange;

            if (data.type === ChangeType.UPDATE) {
              updateCachedData((draft) => {
                return {
                  ...draft,
                  ...data.edge.node,
                };
              });
            } else if (data.type === ChangeType.DELETE) {
              updateCachedData((draft) => {
                draft.active = false;
                return draft;
              });
            }
          }
        },
        error: reject,
        complete: () => resolve(null),
      }
    );
  });
};
