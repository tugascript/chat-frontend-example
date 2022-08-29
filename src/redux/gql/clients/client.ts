import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("/api/graphql");

export const getClient = (): GraphQLClient => client;

export const setClientAuthorization = (token: string): void => {
  client.setHeader("Authorization", `Bearer ${token}`);
};

export const removeClientAuthorization = (): void => {
  client.setHeader("Authorization", "");
};
