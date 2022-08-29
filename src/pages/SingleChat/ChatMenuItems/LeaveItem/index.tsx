import React from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { selectUser } from "../../../../redux/slices/auth-slice";
import DeleteChat from "./DeleteChat";
import LeaveChat from "./LeaveChat";

interface IProps {
  chatId: string;
  authorId: string;
}

const LeaveItem: React.FC<IProps> = ({ chatId, authorId }) => {
  const user = useAppSelector(selectUser);

  return user ? (
    user.id === authorId ? (
      <DeleteChat chatId={chatId} />
    ) : (
      <LeaveChat chatId={chatId} />
    )
  ) : null;
};

export default LeaveItem;
