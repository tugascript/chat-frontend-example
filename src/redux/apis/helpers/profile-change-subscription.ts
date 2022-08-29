import { EntityAdapter } from "@reduxjs/toolkit";
import {
  PatchCollection,
  Recipe,
} from "@reduxjs/toolkit/dist/query/core/buildThunks";
import { getWsClient } from "../../gql/clients";
import { gqlProfileChange } from "../../gql/subscriptions";
import type { ChatById_chatById_profiles_edges } from "../../gql/__generated__/ChatById";
import type { ChatBySlug_chatBySlug_profiles_edges } from "../../gql/__generated__/ChatBySlug";
import type {
  ProfileChange,
  ProfileChangeVariables,
  ProfileChange_profileChange_edge,
} from "../../gql/__generated__/ProfileChange";
import { ChangeType } from "../../gql/__global__/globalTypes";
import type { IChat } from "../interfaces/chat-interface";

export const profileChangeSub = async (
  chatId: string,
  updateCachedData: (recipe: Recipe<IChat>) => PatchCollection,
  adapter: EntityAdapter<
    | ChatBySlug_chatBySlug_profiles_edges
    | ChatById_chatById_profiles_edges
    | ProfileChange_profileChange_edge
  >
): Promise<null> => {
  return new Promise((resolve, reject) => {
    getWsClient().subscribe<ProfileChange, ProfileChangeVariables>(
      {
        query: gqlProfileChange,
        variables: { chatId },
      },
      {
        next: (result) => {
          if (result.data) {
            const data = result.data.profileChange;

            switch (data.type) {
              case ChangeType.NEW:
                updateCachedData((draft) => {
                  draft.profiles.edges = adapter.addOne(
                    draft.profiles.edges,
                    data.edge
                  );
                  return draft;
                });
                break;
              case ChangeType.UPDATE:
                updateCachedData((draft) => {
                  draft.profiles.edges = adapter.upsertOne(
                    draft.profiles.edges,
                    data.edge
                  );
                  return draft;
                });
                break;
              case ChangeType.DELETE:
                updateCachedData((draft) => {
                  draft.profiles.edges = adapter.removeOne(
                    draft.profiles.edges,
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
