import React from "react";
import { useChatBySlugQuery } from "../../redux/apis/chats-api";
import SingleChatCard from "./SingleChatCard";

interface IProps {
  slug: string;
}

const ChatBySlug: React.FC<IProps> = ({ slug }) => {
  const { isLoading, isError, data } = useChatBySlugQuery(slug);

  return <SingleChatCard loading={isLoading} error={isError} chat={data} />;
};

export default ChatBySlug;
