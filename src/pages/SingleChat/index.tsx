import React from "react";
import { useParams } from "react-router-dom";
import Base from "../../components/Base";
import NotFound from "../../components/NotFound";
import ProtectedRoute from "../../components/routes/ProtectedRoute";
import ChatById from "./ChatById";
import ChatBySlug from "./ChatBySlug";
import { getSlugRegex, getUlidRegex } from "./utils/regexes";

const SingleChat: React.FC = () => {
  const { id } = useParams();

  return (
    <ProtectedRoute>
      <Base>
        {id ? (
          getSlugRegex().test(id) ? (
            <ChatBySlug slug={id} />
          ) : getUlidRegex().test(id) ? (
            <ChatById chatId={id} />
          ) : (
            <NotFound />
          )
        ) : (
          <NotFound />
        )}
      </Base>
    </ProtectedRoute>
  );
};

export default SingleChat;
