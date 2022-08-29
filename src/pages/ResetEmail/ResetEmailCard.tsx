import React from "react";
import BaseCard from "../../components/BaseCard";
import ResetEmailForm from "./ResetEmailForm";

const ResetEmailCard: React.FC = () => {
  return (
    <BaseCard title="Send Reset Password Email" align="center">
      <ResetEmailForm />
    </BaseCard>
  );
};

export default ResetEmailCard;
