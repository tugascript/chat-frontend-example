import React from "react";
import Base from "../../components/Base";
import ProtectedRoute from "../../components/routes/ProtectedRoute";
import ChatsCard from "./ChatsCard";

const Chats: React.FC = () => {
  return (
    <ProtectedRoute>
      <Base>
        <ChatsCard />
      </Base>
    </ProtectedRoute>
  );
};

export default Chats;
