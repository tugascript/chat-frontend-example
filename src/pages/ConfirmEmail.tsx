import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Base from "../components/Base";
import UnprotectedRoute from "../components/routes/UnprotectedRoute";
import { useConfirmEmailMutation } from "../redux/apis/auth-api";
import { useParams } from "react-router-dom";

const ConfirmEmail: React.FC = () => {
  const [confirmEmail, { isLoading, isSuccess, isUninitialized, isError }] =
    useConfirmEmailMutation();
  const { token } = useParams();

  React.useEffect(() => {
    if (isUninitialized && token) {
      console.log(token);
      confirmEmail(token);
    }
  }, [confirmEmail, isUninitialized, token]);

  return (
    <UnprotectedRoute>
      <Base>
        <Card raised={false} sx={{ backgroundColor: "primary.main" }}>
          <CardContent>
            <Typography variant="h5" component="h2" color="textSecondary">
              {isLoading
                ? "Loading..."
                : isSuccess
                ? "Email confirmed successfully!"
                : isError
                ? "Token is invalid or expired!"
                : "Confirming..."}
            </Typography>
          </CardContent>
        </Card>
      </Base>
    </UnprotectedRoute>
  );
};

export default ConfirmEmail;
