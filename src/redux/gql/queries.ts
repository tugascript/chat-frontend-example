import { gql } from "graphql-request";

// FOR ACCOUNTS

export const gqlUserById = gql`
  query UserById($userId: String!) {
    userById(userId: $userId) {
      id
      name
      username
      onlineStatus
      lastOnline
      description
      createdAt
      updatedAt
    }
  }
`;

export const gqlUserByUsername = gql`
  query UserByUsername($username: String!) {
    userByUsername(username: $username) {
      id
      name
      username
      onlineStatus
      lastOnline
      description
      createdAt
      updatedAt
    }
  }
`;

export const gqlMe = gql`
  query Me {
    me {
      id
      name
      username
      email
      onlineStatus
      defaultStatus
      description
      createdAt
      updatedAt
    }
  }
`;

export const gqlUsers = gql`
  query Users($search: String, $after: String, $first: Int = 10) {
    users(
      search: $search
      after: $after
      first: $first
      cursor: ALPHA
      order: ASC
    ) {
      edges {
        cursor
        node {
          id
          name
          username
          onlineStatus
          createdAt
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      currentCount
      previousCount
    }
  }
`;

// FOR CHATS

export const gqlChatById = gql`
  query ChatById($chatId: String!) {
    chatById(chatId: $chatId) {
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
        lastOnline
      }
      profiles {
        edges {
          cursor
          node {
            entityId
            nickname
            slug
            createdAt
            updatedAt
          }
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
        previousCount
        currentCount
      }
      messages {
        edges {
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
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        currentCount
        previousCount
      }
    }
  }
`;

export const gqlChatBySlug = gql`
  query ChatBySlug($slug: String!) {
    chatBySlug(slug: $slug) {
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
        lastOnline
      }
      profiles {
        edges {
          cursor
          node {
            entityId
            nickname
            slug
            createdAt
            updatedAt
          }
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
        previousCount
        currentCount
      }
      messages {
        edges {
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
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        currentCount
        previousCount
      }
    }
  }
`;

export const gqlChatByInvitation = gql`
  query ChatByInvitation($invitation: String!) {
    chatByInvitation(invitation: $invitation) {
      entityId
      slug
      name
      chatType
      createdAt
      updatedAt
      expiration
      invitation
      profilesCount
      isMember
      author {
        id
        username
        name
        onlineStatus
        lastOnline
      }
    }
  }
`;

export const gqlPublicChats = gql`
  query PublicChats($search: String, $after: String, $first: Int = 10) {
    publicChats(search: $search, after: $after, first: $first) {
      edges {
        cursor
        node {
          entityId
          slug
          name
          chatType
          createdAt
          updatedAt
          expiration
          invitation
          profilesCount
          isMember
          author {
            id
            username
            name
            onlineStatus
            lastOnline
          }
        }
      }
      currentCount
      previousCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const gqlUserChats = gql`
  query UserChats {
    userChats {
      entityId
      slug
      name
      chatType
      createdAt
      updatedAt
      expiration
      invitation
      profilesCount
    }
  }
`;

export const gqlMemberChats = gql`
  query MemberChats {
    memberChats {
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
        name
        username
        onlineStatus
        lastOnline
      }
    }
  }
`;

// FOR PROFILES

export const gqlProfileById = gql`
  query ProfileById($chatId: String!, $profileId: String!) {
    profileById(chatId: $chatId, profileId: $profileId) {
      entityId
      nickname
      slug
      createdAt
      updatedAt
      user {
        id
        name
        username
        onlineStatus
        lastOnline
      }
    }
  }
`;

export const gqlProfileBySlug = gql`
  query ProfileBySlug($chatId: String!, $slug: String!) {
    profileBySlug(chatId: $chatId, slug: $slug) {
      entityId
      nickname
      slug
      createdAt
      updatedAt
      user {
        id
        name
        username
        onlineStatus
        lastOnline
      }
    }
  }
`;

export const gqlChatProfiles = gql`
  query ChatProfiles(
    $after: String
    $nickname: String
    $chatId: String!
    $first: Int = 10
  ) {
    chatProfiles(
      after: $after
      chatId: $chatId
      nickname: $nickname
      first: $first
    ) {
      edges {
        cursor
        node {
          entityId
          nickname
          slug
          createdAt
          updatedAt
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      currentCount
      previousCount
    }
  }
`;

// FOR MESSAGES

export const gqlChatMessages = gql`
  query ChatMessages($after: String, $chatId: String!, $first: Int = 20) {
    chatMessages(after: $after, chatId: $chatId, first: $first) {
      edges {
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
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      currentCount
      previousCount
    }
  }
`;

export const gqlMessageById = gql`
  query MessageById($chatId: String!, $messageId: String!) {
    messageById(chatId: $chatId, messageId: $messageId) {
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

// FOR INVITES

export const gqlInviteById = gql`
  query InviteById($inviteId: String!) {
    inviteById(inviteId: $inviteId) {
      entityId
      invitation
      status
      createdAt
      updatedAt
      sender {
        id
        username
        name
        onlineStatus
        lastOnline
      }
      chat {
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
`;

export const gqlSentInvitateById = gql`
  query SentInviteById($inviteId: String!) {
    sentInviteById(inviteId: $inviteId) {
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
`;

export const gqlInviteByInvitation = gql`
  query InviteByInvitation($invitation: String!) {
    inviteByInvitation(invitation: $invitation) {
      entityId
      invitation
      status
      createdAt
      updatedAt
      sender {
        id
        username
        name
        onlineStatus
        lastOnline
      }
      chat {
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
`;

export const gqlSentInviteByInvitation = gql`
  query SentInviteByInvitation($invitation: String!) {
    sentInviteByInvitation(invitation: $invitation) {
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
        slug
        name
        chatType
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
`;

export const gqlRecievedInvites = gql`
  query RecievedInvites(
    $after: String
    $first: Int = 10
    $status: InviteStatus
  ) {
    receivedInvites(after: $after, first: $first, status: $status) {
      edges {
        cursor
        node {
          entityId
          invitation
          status
          createdAt
          updatedAt
          sender {
            id
            username
            name
            onlineStatus
            lastOnline
          }
          chat {
            entityId
            slug
            name
            chatType
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
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      currentCount
      previousCount
    }
  }
`;

export const gqlSentInvites = gql`
  query SentInvites($after: String, $first: Int = 10, $status: InviteStatus) {
    sentInvites(after: $after, first: $first, status: $status) {
      edges {
        cursor
        node {
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
            slug
            name
            chatType
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
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      currentCount
      previousCount
    }
  }
`;
