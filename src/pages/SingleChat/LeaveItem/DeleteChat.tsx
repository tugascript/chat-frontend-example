import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useRemoveChatMutation } from "../../../redux/apis/chats-api";

interface IProps {
  chatId: string;
}

const LeaveChat: React.FC<IProps> = ({ chatId }) => {
  const [removeChat, { isLoading, isSuccess }] = useRemoveChatMutation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isSuccess) {
      navigate("/chats", { replace: true });
    }
  }, [isSuccess, navigate]);

  const handleClick = () => {
    removeChat(chatId);
  };

  return (
    <MenuItem disabled={isLoading} onClick={handleClick}>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Remove Chat" />
    </MenuItem>
  );
};

export default LeaveChat;
