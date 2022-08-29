import React from "react";
import ErrorCard from "../../components/ErrorCard";
import LoadingCard from "../../components/LoadingCard";
import NotFound from "../../components/NotFound";
import { useChatByInvitationQuery } from "../../redux/apis/chats-api";
import InvitationChat from "./InvitationChat";

interface IProps {
  invitation: string;
}

const ChatByInvitation: React.FC<IProps> = ({ invitation }) => {
  const { isLoading, isSuccess, data, isError, error } =
    useChatByInvitationQuery(invitation);

  React.useEffect(() => {
    console.log(error);
  }, [error]);
  return isLoading ? (
    <LoadingCard />
  ) : isError ? (
    <ErrorCard />
  ) : isSuccess && data ? (
    <InvitationChat chat={data} />
  ) : (
    <NotFound />
  );
};

export default ChatByInvitation;
