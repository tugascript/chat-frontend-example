import React from "react";
import * as Yup from "yup";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import EmailIcon from "@mui/icons-material/Email";
import { useResetEmailMutation } from "../../redux/apis/auth-api";
import { FormikHelpers } from "formik";
import { useAppDispatch } from "../../redux/hooks";
import { setAlert } from "../../redux/slices/alert-slice";
import { useNavigate } from "react-router-dom";

interface IForm {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

const initialValues: IForm = {
  email: "",
};

const ResetEmailForm: React.FC = () => {
  const [resetEmail, { isLoading, isSuccess, data }] = useResetEmailMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isSuccess && data) {
      dispatch(
        setAlert({
          severity: "success",
          message: data.message,
        })
      );
      navigate("/");
    }
  }, [isSuccess, data, dispatch, navigate]);

  const handleSubmit = ({ email }: IForm, helpers: FormikHelpers<IForm>) => {
    resetEmail(email);
    helpers.resetForm();
  };

  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      direction="row"
    >
      <AppFormField
        size="medium"
        name="email"
        label="email"
        variant="standard"
        loading={isLoading}
        lg={10}
        md={9}
        sm={8}
        xs={8}
      />
      <AppSubmitButton
        size="large"
        text={<EmailIcon fontSize="large" />}
        loading={isLoading}
        lg={2}
        md={3}
        sm={4}
        xs={4}
      />
    </AppForm>
  );
};

export default ResetEmailForm;
