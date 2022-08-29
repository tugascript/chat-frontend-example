import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@mui/material/CircularProgress";
import dayjs from "dayjs";
import type { IPaginatedMessages } from "../../redux/apis/interfaces/chat-interface";

interface IProps {
  messages: IPaginatedMessages;
}

const MessagesList: React.FC<IProps> = ({ messages }) => {
  return (
    <InfiniteScroll
      hasMore={messages.pageInfo.hasNextPage}
      inverse={true}
      next={() => {}}
      loader={<CircularProgress />}
      dataLength={messages.edges.ids.length}
    >
      <List
        sx={{
          width: "100%",
          height: "50vh",
          borderColor: "secondary.main",
          borderWidth: "0.1em",
          borderRadius: "7.5px",
        }}
      >
        {(() => {
          const list: React.ReactElement[] = [];
          const ids = messages.edges.ids;

          for (let i = ids.length - 1; i >= 0; i--) {
            const message = messages.edges.entities[ids[i]];

            if (message) {
              list.push(
                <ListItem key={message.cursor} sx={{ cursor: "pointer" }}>
                  <ListItemText
                    primary={message.node.body}
                    secondary={`${message.node.profile.nickname}: ${(() => {
                      const creation: string = message.node.createdAt;
                      const milli = parseInt(creation, 10);
                      const date = dayjs(milli < 10000 ? creation : milli);

                      return date.format("DD/MM/YYYY HH:mm:ss");
                    })()}`}
                  />
                </ListItem>
              );
            }
          }

          return list;
        })()}
      </List>
    </InfiniteScroll>
  );
};

export default MessagesList;
