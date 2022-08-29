import React from "react";
import CopyInvitation from "./CopyInvitation";
import LeaveItem from "./LeaveItem";

interface IProps {
  chatId: string;
  invitation: string;
  authorId: string;
}

const ChatMenuItems: React.FC<IProps> = ({ chatId, invitation, authorId }) => {
  return (
    <React.Fragment>
      <CopyInvitation invitation={invitation} />
      <LeaveItem chatId={chatId} authorId={authorId} />
    </React.Fragment>
  );
};

export default ChatMenuItems;
