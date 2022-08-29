import { gql } from "graphql-request";

export const gqlChatChange = gql`
  subscription ChatChange($chatId: String!) {
    chatChange(chatId: $chatId) {
      type
      edge {
        cursor
        node {
          entityId
          slug
          name
          chatType
          createdAt
          updatedAt
          expiration
          profilesCount
          author {
            id
            username
            name
            onlineStatus
            lastOnline
          }
        }
      }
    }
  }
`;

export const gqlProfileChange = gql`
  subscription ProfileChange($chatId: String!) {
    profileChange(chatId: $chatId) {
      type
      edge {
        cursor
        node {
          entityId
          nickname
          slug
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export const gqlMessageChange = gql`
  subscription MessageChange($chatId: String!) {
    messageChange(chatId: $chatId) {
      type
      edge {
        cursor
        node {
          entityId
          body
          createdAt
          updatedAt
          profile {
            entityId
            nickname
            slug
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;
