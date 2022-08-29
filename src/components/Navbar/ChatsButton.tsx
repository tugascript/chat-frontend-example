import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ChatsButton: React.FC = () => {
  return (
    <Button
      sx={{
        textDecoration: "none",
        borderWidth: 2,
        "&: hover": { borderWidth: 2 },
        marginRight: "1em",
      }}
      size="large"
      variant="outlined"
      color="secondary"
      disableElevation
      component={Link}
      to="/chats"
    >
      Chats
    </Button>
  );
};

export default ChatsButton;
