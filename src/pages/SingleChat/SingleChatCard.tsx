import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import React from "react";
import CountDown from "react-countdown";
import BaseCard from "../../components/BaseCard";
import CountdownRenderer from "../../components/CountdownRederer";
import { IChat } from "../../redux/apis/interfaces/chat-interface";
import ChatMenuItems from "./ChatMenuItems";
import MessageForm from "./MessageForm";
import MessagesList from "./MessagesList";
import Profiles from "./Profiles";

interface IProps {
  chat?: IChat;
  loading: boolean;
  error: boolean;
}

const SingleChatCard: React.FC<IProps> = ({ chat, loading, error }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BaseCard
      title={
        loading ? "Loading..." : error ? "Error" : chat ? chat.name : "404"
      }
      subheader={
        chat && (
          <CountDown
            date={Date.now() + chat.expiration * 1000}
            renderer={CountdownRenderer}
          />
        )
      }
      actions={
        <React.Fragment>
          <IconButton aria-label="settings" onClick={chat && handleClick}>
            <MoreVertIcon />
          </IconButton>
          {chat && (
            <Menu
              id="settings-chat-menu"
              aria-labelledby="settings"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <ChatMenuItems
                chatId={chat.entityId}
                invitation={chat.invitation ?? ""}
                authorId={chat.author.id}
              />
            </Menu>
          )}
        </React.Fragment>
      }
    >
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
    </BaseCard>
  );
};

export default SingleChatCard;
