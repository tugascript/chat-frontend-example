import React from "react";
import { useChatByIdQuery } from "../../redux/apis/chats-api";
import SingleChatCard from "./SingleChatCard";

interface IProps {
  chatId: string;
}

const ChatById: React.FC<IProps> = ({ chatId }) => {
  const { isLoading, isError, data } = useChatByIdQuery(chatId);

  return <SingleChatCard loading={isLoading} error={isError} chat={data} />;
};

export default ChatById;
