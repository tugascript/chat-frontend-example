import { FormikHelpers } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import SendIcon from "@mui/icons-material/Send";
import { useCreateMessageMutation } from "../../redux/apis/messages-api";
import { useAppDispatch } from "../../redux/hooks";
import { setAlert } from "../../redux/slices/alert-slice";

interface IProps {
  chatId: string;
}

interface IForm {
  body: string;
}

const validationSchema = Yup.object().shape({
  body: Yup.string().min(1).max(300).label("Message"),
});

const initialValues: IForm = {
  body: "",
};

const MessageForm: React.FC<IProps> = ({ chatId }) => {
  const [createMessage, { error, isError, isLoading }] =
    useCreateMessageMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isError && error) {
      dispatch(
        setAlert({
          severity: "error",
          message: "Chat has expired or was deleted.",
        })
      );
      navigate("/chats", { replace: true });
    }
  }, [error, isError, dispatch, navigate]);

  const handleSubmit = ({ body }: IForm, helpers: FormikHelpers<IForm>) => {
    if (body.length > 0) {
      createMessage({ chatId, body });
      helpers.resetForm();
    }
  };

  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      direction="row"
    >
      <AppFormField
        name="body"
        placeholder="Type a message..."
        size="small"
        lg={11}
        md={10}
        sm={9}
        xs={8}
        loading={isLoading}
      />
      <AppSubmitButton
        lg={1}
        md={2}
        sm={3}
        xs={4}
        size="large"
        text={<SendIcon />}
        loading={isLoading}
      />
    </AppForm>
  );
};

export default MessageForm;
