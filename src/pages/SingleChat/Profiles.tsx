import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import type { IPaginatedProfiles } from "../../redux/apis/interfaces/chat-interface";

interface IProps {
  profiles: IPaginatedProfiles;
}

const Profiles: React.FC<IProps> = ({ profiles }) => {
  return (
    <List sx={{ width: "100%" }}>
      <InfiniteScroll
        hasMore={profiles.pageInfo.hasNextPage}
        inverse={true}
        next={() => {}}
        loader={<CircularProgress />}
        dataLength={profiles.edges.ids.length}
      >
        {(() => {
          const list: React.ReactElement[] = [];

          for (const key of profiles.edges.ids) {
            const profile = profiles.edges.entities[key];

            if (profile) {
              list.push(
                <ListItem key={profile.cursor} sx={{ cursor: "pointer" }}>
                  <ListItemText primary={profile.node.nickname} />
                </ListItem>
              );
            }
          }

          return list;
        })()}
      </InfiniteScroll>
    </List>
  );
};

export default Profiles;
