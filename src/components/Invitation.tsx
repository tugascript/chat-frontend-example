import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateProfileMutation } from "../redux/apis/profiles-api";
import { useAppDispatch } from "../redux/hooks";
import { setAlert } from "../redux/slices/alert-slice";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";

interface IProps {
  invitation: string;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

const Invitation: React.FC<IProps> = ({ invitation, anchorEl, onClose }) => {
  const open = Boolean(anchorEl);
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
      onClose();
    }
  }, [
    open,
    data,
    isSuccess,
    navigate,
    dispatch,
    isUninitialized,
    error,
    isError,
    onClose,
  ]);

  return (
    <Menu
      id={invitation}
      aria-labelledby={`invitation-${invitation}`}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
    >
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
    </Menu>
  );
};

export default Invitation;
