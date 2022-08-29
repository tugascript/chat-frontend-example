import PersonIcon from "@mui/icons-material/Person";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import Invitation from "../../components/Invitation";
import { PublicChats_publicChats_edges_node } from "../../redux/gql/__generated__/PublicChats";
import CountDown from "react-countdown";
import CountdownRederer from "../../components/CountdownRederer";
import Menu from "@mui/material/Menu";

interface IProps {
  chat: PublicChats_publicChats_edges_node;
}

const PublicChatItem: React.FC<IProps> = ({ chat }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
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
      <Menu
        id={chat.invitation}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Invitation invitation={chat.invitation} onClose={handleClose} />
      </Menu>
      <ListItemIcon>
        <Typography variant="subtitle2">{chat.profilesCount}</Typography>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText
        primary={
          <React.Fragment>
            {chat.name} [
            <CountDown
              renderer={CountdownRederer}
              date={Date.now() + chat.expiration * 1000}
            />
            ]
          </React.Fragment>
        }
        secondary={chat.author.name}
      />
    </MenuItem>
  );
};

export default PublicChatItem;
