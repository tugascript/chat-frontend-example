import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import React from "react";
import { UserById_userById } from "../../redux/gql/__generated__/UserById";
import { UserByUsername_userByUsername } from "../../redux/gql/__generated__/UserByUsername";

interface IProps {
  user: UserById_userById | UserByUsername_userByUsername;
}

const SingleProfileCard: React.FC<IProps> = ({ user }) => {
  return (
    <Card raised={false} sx={{ backgroundColor: "primary.main" }}>
      <CardHeader
        title={<Typography variant="h3">{user.name}</Typography>}
        subheader={user.onlineStatus}
      />
      <CardContent>
        <Typography variant="subtitle2">
          Joined At: {dayjs(parseInt(user.createdAt, 10)).format("DD/MM/YYYY")}
        </Typography>
        {user.description ? (
          user.description
            .split("\n")
            .map((line, index) => <Typography key={index}>{line}</Typography>)
        ) : (
          <Typography>This user has no description</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default SingleProfileCard;
