import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useCreateChatMutation } from "../../redux/apis/chats-api";
import {
  ChatType,
  CreateChatInput,
} from "../../redux/gql/__global__/globalTypes";
import { useAppDispatch } from "../../redux/hooks";
import { setAlert } from "../../redux/slices/alert-slice";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import AppSubmitButton from "../../components/forms/AppSubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .matches(
      new RegExp("(^[\\p{L}'\\.\\s]*$)", "u"),
      "Name can only contain letters, dots and spaces"
    )
    .min(3)
    .max(100)
    .label("Name"),
  chatType: Yup.string()
    .required()
    .oneOf([ChatType.PUBLIC, ChatType.PRIVATE])
    .label("Type"),
  time: Yup.number().required().min(5).max(1440).label("Time"),
});

const initialValues: CreateChatInput = {
  chatType: ChatType.PUBLIC,
  name: "",
  time: 5,
};

const CreateChatForm: React.FC = () => {
  const [createChat, { error, isLoading, isError, isSuccess, data }] =
    useCreateChatMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isSuccess && data) {
      navigate(`/chats/${data.slug}`, { replace: true });
    } else if (isError && error) {
      dispatch(
        setAlert({
          severity: "error",
          message: (error as any)?.data?.message ?? "Something went wrong",
        })
      );
    }
  }, [error, isError, isSuccess, data, navigate, dispatch]);

  const handleSubmit = ({ name, time, chatType }: CreateChatInput) => {
    createChat({ name, time, chatType });
  };

  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <AppFormField name="name" label="Name" loading={isLoading} />
      <AppFormField
        name="time"
        type="number"
        label="Time"
        loading={isLoading}
        md={6}
        sm={12}
        xs={12}
      />
      <AppFormField
        select
        options={[
          {
            label: "Public",
            value: ChatType.PUBLIC,
          },
          {
            label: "Private",
            value: ChatType.PRIVATE,
          },
        ]}
        name="chatType"
        label="Chat Type"
        loading={isLoading}
        md={6}
        sm={12}
        xs={12}
      />
      <AppSubmitButton size="large" text="Create Chat" loading={isLoading} />
    </AppForm>
  );
};

export default CreateChatForm;
