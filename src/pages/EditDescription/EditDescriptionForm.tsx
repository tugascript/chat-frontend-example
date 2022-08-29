import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import { useUpdateAccountDescriptionMutation } from "../../redux/apis/accounts-api";
import { UpdateAccountDescriptionVariables } from "../../redux/gql/__generated__/UpdateAccountDescription";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAlert } from "../../redux/slices/alert-slice";
import { selectUser } from "../../redux/slices/auth-slice";

const validationSchema = Yup.object().shape({
  description: Yup.string().required().min(1).max(500).label("Description"),
});

const EditDescriptionForm: React.FC = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [updateDescription, { isError, error, isLoading, isSuccess, data }] =
    useUpdateAccountDescriptionMutation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isError && error) {
      dispatch(
        setAlert({
          message: "Something went wrong. Please try again",
          severity: "error",
        })
      );
    } else if (isSuccess && data) {
      dispatch(
        setAlert({
          message: "Description updated successfully",
          severity: "success",
        })
      );
      navigate(`/profiles/${data.username}`);
    }
  }, [error, isError, dispatch, isSuccess, data, navigate]);

  const handleSubmit = ({ description }: UpdateAccountDescriptionVariables) => {
    updateDescription(description);
  };

  const initialValues: UpdateAccountDescriptionVariables = {
    description: user?.description ?? "",
  };

  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <AppFormField
        name="description"
        label="Description"
        multiline
        rows={5}
        loading={isLoading}
      />
      <AppSubmitButton text="Edit" loading={isLoading} />
    </AppForm>
  );
};

export default EditDescriptionForm;
