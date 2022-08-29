import React from "react";
import { useParams } from "react-router-dom";
import Base from "../../components/Base";
import NotFound from "../../components/NotFound";
import ChatByInvitation from "./ChatByInvitation";

const Invitation: React.FC = () => {
  const { invitation } = useParams();

  return (
    <Base>
      {invitation ? <ChatByInvitation invitation={invitation} /> : <NotFound />}
    </Base>
  );
};

export default Invitation;
