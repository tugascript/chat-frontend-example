import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLazyPublicChatsQuery } from "../../redux/apis/chats-api";
import type { PublicChats_publicChats_edges } from "../../redux/gql/__generated__/PublicChats";
import PublicChatItem from "./PublicChatItem";

interface IState {
  chats: PublicChats_publicChats_edges[];
  hasMore: boolean;
  after: string | null;
}

const initialState: IState = {
  chats: [],
  hasMore: false,
  after: null,
};

const PublicChats: React.FC = () => {
  const [state, setState] = React.useState<IState>(initialState);
  const [
    fetchChats,
    { isFetching, isSuccess, isUninitialized, isError, data },
  ] = useLazyPublicChatsQuery();

  React.useEffect(() => {
    if (isUninitialized) {
      fetchChats({ first: 20 });
    }

    if (!isFetching && isSuccess && data) {
      setState((prevState) => ({
        chats: [...prevState.chats, ...data.edges],
        hasMore: data.pageInfo.hasNextPage,
        after: data.pageInfo.endCursor,
      }));
    }
  }, [isUninitialized, isFetching, isSuccess, data, fetchChats]);

  return (
    <InfiniteScroll
      hasMore={state.hasMore}
      inverse={true}
      next={() => {
        if (state.hasMore) {
          fetchChats({ first: 10, after: state.after });
        }
      }}
      dataLength={state.chats.length}
      loader={<CircularProgress />}
    >
      <List
        sx={{
          width: "100%",
          maxHeight: "40vh",
        }}
      >
        {isFetching && state.chats.length === 0 ? (
          <ListItem>
            <ListItemText primary="Loading..." />
          </ListItem>
        ) : !isError ? (
          (() => {
            const list: React.ReactElement[] = [];

            for (let i = state.chats.length - 1; i >= 0; i--) {
              const chat = state.chats[i];

              list.push(<PublicChatItem chat={chat.node} key={chat.cursor} />);
            }

            return list;
          })()
        ) : (
          <ListItem>
            <ListItemText primary="Something went wrong" />
          </ListItem>
        )}
      </List>
    </InfiniteScroll>
  );
};

export default PublicChats;
