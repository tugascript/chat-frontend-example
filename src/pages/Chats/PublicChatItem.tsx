import PersonIcon from "@mui/icons-material/Person";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import Invitation from "../../components/Invitation";
import { PublicChats_publicChats_edges_node } from "../../redux/gql/__generated__/PublicChats";

interface IProps {
  chat: PublicChats_publicChats_edges_node;
}

const PublicChatItem: React.FC<IProps> = ({ chat }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (chat.isMember) {
      navigate(`/chats/${chat.slug}`, { replace: true });
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuItem onClick={handleClick}>
      <Invitation
        invitation={chat.invitation ?? ""}
        anchorEl={anchorEl}
        onClose={() => handleClose()}
      />
      <ListItemIcon>
        <Typography variant="subtitle2">{chat.profilesCount}</Typography>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary={chat.name} secondary={chat.author.name} />
    </MenuItem>
  );
};

export default PublicChatItem;
