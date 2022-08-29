import { FormikHelpers } from "formik";
import React from "react";
import * as Yup from "yup";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import { useRegisterMutation } from "../../redux/apis/auth-api";
import { IRegister } from "../../redux/apis/interfaces/register-interface";
import { useAppDispatch } from "../../redux/hooks";
import { setAlert } from "../../redux/slices/alert-slice";

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
  email: Yup.string().email().required().label("Email"),
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

const initialValues: IRegister = {
  name: "",
  email: "",
  password1: "",
  password2: "",
};

const RegisterForm: React.FC = () => {
  const [register, { error, isLoading, isError, isSuccess, data }] =
    useRegisterMutation();
  const dispatch = useAppDispatch();

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
    }
  }, [isError, error, dispatch, isSuccess, data]);

  const handleSubmit = (
    { name, email, password1, password2 }: IRegister,
    helpers: FormikHelpers<IRegister>
  ) => {
    if (password1 !== password2) {
      helpers.setFieldError("password1", "Passwords do not match");
      return;
    }

    register({ name, email, password1, password2 });
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
        variant="standard"
        name="name"
        label="Name"
        loading={isLoading}
      />
      <AppFormField
        size="medium"
        variant="standard"
        name="email"
        label="Email"
        loading={isLoading}
      />
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
      <AppSubmitButton size="large" text="Register" loading={isLoading} />
    </AppForm>
  );
};

export default RegisterForm;
