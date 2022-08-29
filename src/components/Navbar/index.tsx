import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeButton from "./HomeButton";
import { selectAuth } from "../../redux/slices/auth-slice";
import { useAppSelector } from "../../redux/hooks";
import ChatsButton from "./ChatsButton";
import UserButton from "./UserButton";

const Navbar: React.FC = () => {
  const { authenticated, user } = useAppSelector(selectAuth);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ephemeral Chats
        </Typography>
        {authenticated ? <ChatsButton /> : <HomeButton />}
        {user && <UserButton user={user} />}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
