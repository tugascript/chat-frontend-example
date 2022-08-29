import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import React from "react";
import BaseCard from "../../components/BaseCard";
import { UserById_userById } from "../../redux/gql/__generated__/UserById";
import { UserByUsername_userByUsername } from "../../redux/gql/__generated__/UserByUsername";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/slices/auth-slice";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

interface IProps {
  user: UserById_userById | UserByUsername_userByUsername;
}

const SingleProfileCard: React.FC<IProps> = ({ user }) => {
  const currentUser = useAppSelector(selectUser);

  return (
    <BaseCard
      title={user.name}
      subheader={user.onlineStatus}
      actions={
        currentUser && currentUser.username === user.username ? (
          <IconButton
            color="warning"
            component={Link}
            to={`/profiles/${currentUser.username}/edit`}
          >
            <EditIcon />
          </IconButton>
        ) : undefined
      }
    >
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
    </BaseCard>
  );
};

export default SingleProfileCard;
