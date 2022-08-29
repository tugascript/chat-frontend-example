import { FormikHelpers } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import { useResetPasswordMutation } from "../../redux/apis/auth-api";
import { ILogin } from "../../redux/apis/interfaces/login-interface";
import { IPasswords } from "../../redux/apis/interfaces/passwords-interface";
import { useAppDispatch } from "../../redux/hooks";
import { setAlert } from "../../redux/slices/alert-slice";

const validationSchema = Yup.object().shape({
  password1: Yup.string()
    .required()
    .matches(
      /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number or special character"
    )
    .min(8)
    .max(35)
    .label("Password"),
  password2: Yup.string().required().label("Confirm Password"),
});

const initialValues: IPasswords = {
  password1: "",
  password2: "",
};

interface IProps {
  resetToken: string;
}

const ResetPasswordForm: React.FC<IProps> = ({ resetToken }) => {
  const [resetPassword, { error, isLoading, isError, isSuccess, data }] =
    useResetPasswordMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isError && error) {
      dispatch(
        setAlert({
          severity: "error",
          message: (error as any)?.data?.message ?? "Something went wrong",
        })
      );
    } else if (isSuccess && data) {
      dispatch(
        setAlert({
          severity: "success",
          message: data.message,
        })
      );
      navigate("/", { replace: true });
    }
  }, [isError, isSuccess, error, data, dispatch, navigate]);

  const handleSubmit = (
    { password1, password2 }: IPasswords,
    helpers: FormikHelpers<ILogin>
  ) => {
    if (password1 !== password2) {
      helpers.setFieldError("password1", "Passwords do not match");
      return;
    }

    resetPassword({ password1, password2, resetToken });
    helpers.resetForm();
  };

  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <AppFormField
        size="medium"
        type="password"
        name="password1"
        label="Password"
        variant="standard"
        loading={isLoading}
      />
      <AppFormField
        size="medium"
        variant="standard"
        type="password"
        name="password2"
        label="Confirm Password"
        loading={isLoading}
      />
      <AppSubmitButton size="large" text="Reset Password" loading={isLoading} />
    </AppForm>
  );
};

export default ResetPasswordForm;
