import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLogoutMutation } from "../../../redux/apis/auth-api";

const LogoutItem: React.FC = () => {
  const [logout] = useLogoutMutation();

  return (
    <MenuItem onClick={() => logout()}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </MenuItem>
  );
};

export default LogoutItem;
