import React from "react";
import Base from "../../components/Base";
import ProtectedRoute from "../../components/routes/ProtectedRoute";
import EditDescriptionCard from "./EditDescriptionCard";

const EditDescription: React.FC = () => {
  return (
    <ProtectedRoute>
      <Base>
        <EditDescriptionCard />
      </Base>
    </ProtectedRoute>
  );
};

export default EditDescription;
