import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

interface IProps {
  onClose: () => void;
  username: string;
}

const ProfileItem: React.FC<IProps> = ({ onClose, username }) => {
  const navigate = useNavigate();

  return (
    <MenuItem
      onClick={() => {
        navigate(`/profiles/${username}`);
        onClose();
      }}
    >
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </MenuItem>
  );
};

export default ProfileItem;
