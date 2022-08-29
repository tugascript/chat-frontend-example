import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActtions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { ChatByInvitation_chatByInvitation } from "../../redux/gql/__generated__/ChatByInvitation";
import CountDown from "react-countdown";
import { useCreateProfileMutation } from "../../redux/apis/profiles-api";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAlert } from "../../redux/slices/alert-slice";
import { selectUser } from "../../redux/slices/auth-slice";

interface IProps {
  chat: ChatByInvitation_chatByInvitation;
}

const InvitationChat: React.FC<IProps> = ({ chat }) => {
  const [
    createProfile,
    { data, isSuccess, isLoading, isError, error, isUninitialized },
  ] = useCreateProfileMutation();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (isSuccess && data) {
      navigate(`/chats/${data.chat.slug}`);
    } else if (isError && error) {
      dispatch(
        setAlert({
          severity: "error",
          message: "Chat room no longer exists!",
        })
      );
      navigate("/chats", { replace: true });
    }
  }, [data, isSuccess, navigate, dispatch, isUninitialized, error, isError]);

  return (
    <Card raised={false} sx={{ backgroundColor: "primary.main" }}>
      <CardHeader
        title={<Typography variant="h3">{chat.name}</Typography>}
        subheader={
          <Typography variant="h6" color="grey.400">
            By {chat.author.name}
          </Typography>
        }
      />
      <CardContent>
        <Typography align="center" variant="h4" gutterBottom>
          <CountDown date={Date.now() + chat.expiration * 1000} />
        </Typography>
        <Typography align="center" variant="body1" paragraph>
          <b>Members:</b> {chat.profilesCount}
        </Typography>
      </CardContent>
      <CardActtions>
        {user && user.id === chat.author.id ? (
          <Button
            onClick={() => navigate(`/chats/${chat.slug}`)}
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
          >
            Go Back to Chat
          </Button>
        ) : (
          <Button
            onClick={() =>
              user ? createProfile(chat.invitation) : navigate("/")
            }
            disabled={isLoading}
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
          >
            JOIN
          </Button>
        )}
      </CardActtions>
    </Card>
  );
};

export default InvitationChat;
