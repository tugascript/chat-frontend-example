import { FormikHelpers } from "formik";
import React from "react";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import { useLoginMutation } from "../../redux/apis/auth-api";
import { ILogin } from "../../redux/apis/interfaces/login-interface";
import { useAppDispatch } from "../../redux/hooks";
import { setAlert } from "../../redux/slices/alert-slice";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(1).label("Password"),
});

const initialValues: ILogin = {
  email: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const [login, { error, isLoading, isError, isSuccess, data }] =
    useLoginMutation();
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
      if ("message" in data) {
        dispatch(
          setAlert({
            severity: "success",
            message: data.message,
          })
        );
      }
    }
  }, [isError, isSuccess, error, data, dispatch]);

  const handleSubmit = (
    { email, password }: ILogin,
    helpers: FormikHelpers<ILogin>
  ) => {
    login({ email, password });
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
        name="email"
        label="Email"
        loading={isLoading}
      />
      <AppFormField
        size="medium"
        type="password"
        name="password"
        label="Password"
        variant="standard"
        loading={isLoading}
      />
      <AppSubmitButton
        variant="outlined"
        size="large"
        text="Login"
        loading={isLoading}
      />
      <Grid item xs={12}>
        <Button
          size="large"
          fullWidth
          variant="outlined"
          disableElevation
          color="info"
          href="/altair"
          target="_blank"
          sx={{
            borderWidth: 2,
            "&: hover": {
              borderWidth: 2,
            },
          }}
        >
          Go To API
        </Button>
        <Typography>
          Forgot password?{" "}
          <Link
            style={{ textDecoration: "none", color: "#679E63" }}
            to="/reset-password"
          >
            Reset
          </Link>
        </Typography>
      </Grid>
    </AppForm>
  );
};

export default LoginForm;
