import Grid from "@mui/material/Grid";
import React from "react";
import BaseCard from "../../components/BaseCard";
import CreateChatForm from "./CreateChatForm";
import PublicChats from "./PublicChats";

const ChatsCard: React.FC = () => {
  return (
    <BaseCard title="Create or Enter Chat" align="center">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item md={6} xs={12}>
          <CreateChatForm />
        </Grid>
        <Grid item md={6} xs={12}>
          <PublicChats />
        </Grid>
      </Grid>
    </BaseCard>
  );
};

export default ChatsCard;
