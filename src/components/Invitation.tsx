import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateProfileMutation } from "../redux/apis/profiles-api";
import { useAppDispatch } from "../redux/hooks";
import { setAlert } from "../redux/slices/alert-slice";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";

interface IProps {
  onClose: () => void;
  invitation: string;
}

const Invitation: React.FC<IProps> = ({ onClose, invitation }) => {
  const [createProfile, { data, isSuccess, isError, error, isUninitialized }] =
    useCreateProfileMutation();
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
    }
  }, [data, isSuccess, navigate, dispatch, isUninitialized, error, isError]);

  return (
    <React.Fragment>
      <MenuItem onClick={onClose}>
        <ListItemIcon>
          <CloseIcon />
        </ListItemIcon>
        <ListItemText>Close</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => createProfile(invitation)}>
        <ListItemIcon>
          <LoginIcon />
        </ListItemIcon>
        <ListItemText>Join</ListItemText>
      </MenuItem>
    </React.Fragment>
  );
};

export default Invitation;
