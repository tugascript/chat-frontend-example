import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLeaveChatMutation } from "../../../../redux/apis/profiles-api";
import { useNavigate } from "react-router-dom";

interface IProps {
  chatId: string;
}

const LeaveChat: React.FC<IProps> = ({ chatId }) => {
  const [leaveChat, { isLoading, isSuccess }] = useLeaveChatMutation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isSuccess) {
      navigate("/chats", { replace: true });
    }
  }, [isSuccess, navigate]);

  const handleClick = () => {
    leaveChat(chatId);
  };

  return (
    <MenuItem disabled={isLoading} onClick={handleClick}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Leave Chat" />
    </MenuItem>
  );
};

export default LeaveChat;
