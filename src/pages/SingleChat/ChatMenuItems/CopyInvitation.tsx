import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShareIcon from "@mui/icons-material/Share";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface IProps {
  invitation: string;
}

const CopyInvitation: React.FC<IProps> = ({ invitation }) => {
  return (
    <CopyToClipboard text={`http://localhost:3000/invitations/${invitation}`}>
      <MenuItem>
        <ListItemIcon>
          <ShareIcon />
        </ListItemIcon>
        <ListItemText primary="Copy Invitation Link" />
      </MenuItem>
    </CopyToClipboard>
  );
};

export default CopyInvitation;
