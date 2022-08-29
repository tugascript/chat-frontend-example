import { gql } from "graphql-request";

// FOR ACCOUNTS

export const gqlUpdateAccountDescription = gql`
  mutation UpdateAccountDescription($description: String!) {
    updateAccountDescription(description: $description) {
      id
      name
      username
      description
      updatedAt
    }
  }
`;

export const gqlUpdateOnlineStatus = gql`
  mutation UpdateOnlineStatus($defaultStatus: OnlineStatus!) {
    updateOnlineStatus(defaultStatus: $defaultStatus) {
      id
      name
      username
      defaultStatus
      onlineStatus
      updatedAt
    }
  }
`;

export const gqlDeleteAccount = gql`
  mutation DeleteAccount($password: String!) {
    deleteAccount(password: $password) {
      id
      message
    }
  }
`;

// FOR CHATS

export const gqlCreateChat = gql`
  mutation CreateChat($input: CreateChatInput!) {
    createChat(input: $input) {
      entityId
      slug
    }
  }
`;

export const gqlUpdateChat = gql`
  mutation UpdateChat($input: UpdateChatInput!) {
    updateChat(input: $input) {
      entityId
      name
      slug
      chatType
      createdAt
      updatedAt
      endOfLife
      expiration
    }
  }
`;

export const gqlRemoveChat = gql`
  mutation RemoveChat($chatId: String!) {
    removeChat(chatId: $chatId) {
      id
      message
    }
  }
`;

// FOR PROFILES

export const gqlCreateProfile = gql`
  mutation CreateProfile($invitation: String!) {
    createProfile(invitation: $invitation) {
      entityId
      nickname
      slug
      time
      createdAt
      updatedAt
      chat {
        entityId
        name
        slug
        expiration
      }
    }
  }
`;

export const gqlUpdateProfileNickname = gql`
  mutation UpdateProfileNickname($input: UpdateProfileNicknameInput!) {
    updateProfileNickname(input: $input) {
      entityId
      nickname
      slug
      expiration
      createdAt
      updatedAt
      chat {
        entityId
        name
        slug
        expiration
      }
    }
  }
`;

export const gqlUpdateOwnNickname = gql`
  mutation UpdateOwnNickname($input: UpdateNicknameInput!) {
    updateOwnNickname(input: $input) {
      entityId
      nickname
      slug
      createdAt
      expiration
      updatedAt
      chat {
        entityId
        name
        slug
        expiration
      }
    }
  }
`;

export const gqlLeaveChat = gql`
  mutation LeaveChat($chatId: String!) {
    leaveChat(chatId: $chatId) {
      id
      message
    }
  }
`;

export const gqlRemoveProfile = gql`
  mutation RemoveProfile($chatId: String!, $profileId: String!) {
    removeProfile(chatId: $chatId, profileId: $profileId) {
      id
      message
    }
  }
`;

// FOR MESSAGES

export const gqlCreateMessage = gql`
  mutation CreateMessage($input: CreateMessageInput!) {
    createMessage(input: $input) {
      entityId
      body
      createdAt
      updatedAt
      profile {
        entityId
        nickname
        slug
      }
    }
  }
`;

export const gqlUpdateMessage = gql`
  mutation UpdateMessage($input: UpdateMessageInput!) {
    updateMessage(input: $input) {
      entityId
      body
      createdAt
      updatedAt
    }
  }
`;

export const gqlRemoveMessage = gql`
  mutation RemoveMessage($chatId: String!, $messageId: String!) {
    removeMessage(chatId: $chatId, messageId: $messageId) {
      id
      message
    }
  }
`;

// FOR INVITES

export const gqlCreateInvite = gql`
  mutation CreateInvite($input: CreateInviteInput!) {
    createInvite(input: $input) {
      entityId
      invitation
      status
      createdAt
      updatedAt
      recipient {
        id
        username
        name
        onlineStatus
        lastOnline
      }
      chat {
        entityId
        name
        slug
        expiration
      }
    }
  }
`;

export const gqlAcceptInvite = gql`
  mutation AcceptInvite($invitation: String!) {
    acceptInvite(invitation: $invitation) {
      entityId
      invitation
      status
      createdAt
      updatedAt
      chat {
        entityId
        slug
        name
        chatType
        createdAt
        updatedAt
        expiration
        invitation
        profilesCount
        author {
          id
          username
          name
          onlineStatus
        }
      }
    }
  }
`;

export const gqlDeclineInvite = gql`
  mutation DeclineInvite($invitation: String!) {
    declineInvite(invitation: $invitation) {
      entityId
      invitation
      status
      createdAt
      updatedAt
    }
  }
`;

export const gqlUpdateRejectedInvite = gql`
  mutation UpdateRejectedInvite($invitation: String!) {
    updateRejectedInvite(invitation: $invitation) {
      entityId
      invitation
      status
      createdAt
      updatedAt
      chat {
        entityId
        slug
        name
        chatType
        createdAt
        updatedAt
        expiration
        invitation
        profilesCount
        author {
          id
          username
          name
          onlineStatus
        }
      }
    }
  }
`;

export const gqlDeleteInvite = gql`
  mutation DeleteInvite($inviteId: String!) {
    deleteInvite(inviteId: $inviteId) {
      id
      message
    }
  }
`;
