import { createClient, Client } from "graphql-ws";
import { getAuthToken } from "./auth-token";

let client: Client | null = null;

export const createWsClient = (): Client => {
  client = createClient({
    url: "ws://localhost:4000/api/graphql",
    connectionParams: {
      authorization: `Bearer ${getAuthToken()}`,
    },
  });

  return client;
};

export const getWsClient = (): Client => client ?? createWsClient();
