import React from "react";
import Base from "../../components/Base";
import UnprotectedRoute from "../../components/routes/UnprotectedRoute";
import ResetEmailCard from "./ResetEmailCard";

const ResetEmail: React.FC = () => {
  return (
    <UnprotectedRoute>
      <Base>
        <ResetEmailCard />
      </Base>
    </UnprotectedRoute>
  );
};

export default ResetEmail;
