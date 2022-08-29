import React from "react";
import { useParams } from "react-router-dom";
import Base from "../../components/Base";
import BaseCard from "../../components/BaseCard";
import NotFound from "../../components/NotFound";
import UnprotectedRoute from "../../components/routes/UnprotectedRoute";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPassword: React.FC = () => {
  const { token } = useParams();
  return (
    <UnprotectedRoute>
      <Base>
        {token ? (
          <BaseCard title="Reset Password" align="center">
            <ResetPasswordForm resetToken={token} />
          </BaseCard>
        ) : (
          <NotFound />
        )}
      </Base>
    </UnprotectedRoute>
  );
};

export default ResetPassword;
