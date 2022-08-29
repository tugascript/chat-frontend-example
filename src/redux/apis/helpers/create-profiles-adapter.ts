import { createEntityAdapter } from "@reduxjs/toolkit";
import type { ChatById_chatById_profiles_edges } from "../../gql/__generated__/ChatById";
import type { ChatBySlug_chatBySlug_profiles_edges } from "../../gql/__generated__/ChatBySlug";
import type { ProfileChange_profileChange_edge } from "../../gql/__generated__/ProfileChange";

export const createProfilesAdapter = () =>
  createEntityAdapter<
    | ChatBySlug_chatBySlug_profiles_edges
    | ChatById_chatById_profiles_edges
    | ProfileChange_profileChange_edge
  >({
    selectId: (edge) => edge.cursor,
    sortComparer: (a, b) => a.node.slug.localeCompare(b.node.slug),
  });
