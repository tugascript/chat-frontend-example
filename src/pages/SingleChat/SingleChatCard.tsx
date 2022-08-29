import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import { IChat } from "../../redux/apis/interfaces/chat-interface";
import MessageForm from "./MessageForm";
import MessagesList from "./MessagesList";
import Profiles from "./Profiles";

interface IProps {
  chat?: IChat;
  loading: boolean;
  error: boolean;
}

const SingleChatCard: React.FC<IProps> = ({ chat, loading, error }) => {
  return (
    <Card raised={false} sx={{ backgroundColor: "primary.main" }}>
      <CardHeader
        title={
          loading ? (
            "Loading..."
          ) : error ? (
            "Error"
          ) : chat ? (
            <Typography variant="h3">{chat.name}</Typography>
          ) : (
            "404"
          )
        }
        action={
          <React.Fragment>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </React.Fragment>
        }
      />
      <CardContent>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography variant="h6" paragraph>
            There was an error loading the chat.
          </Typography>
        ) : chat ? (
          <Grid container spacing={1}>
            <Hidden mdDown>
              <Grid item lg={8} md={7} xs={12}>
                <Typography paragraph variant="h5">
                  Messages:
                </Typography>
              </Grid>
              <Grid item lg={4} md={5} xs={12}>
                <Typography variant="h5">Profiles:</Typography>
              </Grid>
            </Hidden>
            <Grid item lg={8} md={7} xs={12}>
              <MessagesList messages={chat.messages} />
              <MessageForm chatId={chat.entityId} />
            </Grid>
            <Grid item>
              <Profiles profiles={chat.profiles} />
            </Grid>
          </Grid>
        ) : (
          <Typography paragraph>Chat not found.</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default SingleChatCard;
