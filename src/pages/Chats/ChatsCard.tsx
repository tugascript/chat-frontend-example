import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CreateChatForm from "./CreateChatForm";
import PublicChats from "./PublicChats";

const ChatsCard: React.FC = () => {
  return (
    <Card raised={false} sx={{ backgroundColor: "primary.main" }}>
      <CardHeader
        title={
          <Typography variant="h3" align="center">
            Create or Enter Chat
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item md={6} xs={12}>
            <CreateChatForm />
          </Grid>
          <Grid item md={6} xs={12}>
            <PublicChats />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ChatsCard;
