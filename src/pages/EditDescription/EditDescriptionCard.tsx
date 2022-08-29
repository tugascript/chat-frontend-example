import React from "react";
import BaseCard from "../../components/BaseCard";
import EditDescriptionForm from "./EditDescriptionForm";

const EditDescriptionCard: React.FC = () => {
  return (
    <BaseCard title="Edit Description">
      <EditDescriptionForm />
    </BaseCard>
  );
};

export default EditDescriptionCard;
