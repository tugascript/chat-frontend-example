import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Me_me } from "../../../redux/gql/__generated__/Me";
import ProfileItem from "./ProfileItem";
import LogoutItem from "./LogoutItem";

interface IProps {
  user: Me_me;
}

const UserButton: React.FC<IProps> = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        id="user-button"
        onClick={handleClick}
        disableElevation
      >
        {user.name.length > 30 ? `${user.name.substring(0, 30)}...` : user.name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "user-button",
        }}
      >
        <ProfileItem username={user.username} onClose={handleClose} />
        <LogoutItem />
      </Menu>
    </React.Fragment>
  );
};

export default UserButton;
