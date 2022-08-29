/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ChangeType {
  DELETE = "DELETE",
  NEW = "NEW",
  UPDATE = "UPDATE",
}

export enum ChatType {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}

export enum InviteStatus {
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
  PENDING = "PENDING",
}

export enum OnlineStatus {
  BUSY = "BUSY",
  DO_NOT_DISTURB = "DO_NOT_DISTURB",
  IDLE = "IDLE",
  INVISIBLE = "INVISIBLE",
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
}

export interface CreateChatInput {
  chatType: ChatType;
  name: string;
  time: number;
}

export interface CreateInviteInput {
  invitation: string;
  recipientId: string;
}

export interface CreateMessageInput {
  body: string;
  chatId: string;
}

export interface UpdateChatInput {
  chatId: string;
  chatType?: ChatType | null;
  name?: string | null;
}

export interface UpdateMessageInput {
  body: string;
  chatId: string;
  messageId: string;
}

export interface UpdateNicknameInput {
  chatId: string;
  nickname: string;
}

export interface UpdateProfileNicknameInput {
  chatId: string;
  nickname: string;
  profileId: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
