import React from "react";
import { useParams } from "react-router-dom";
import Base from "../../components/Base";
import NotFound from "../../components/NotFound";
import { getMongoIdRegex, getSlugRegex } from "../SingleChat/utils/regexes";
import UserById from "./UserById";
import UserByUsername from "./UserByUsername";

const SingleProfile: React.FC = () => {
  const { id } = useParams();

  return (
    <Base>
      {id ? (
        getSlugRegex().test(id) ? (
          <UserByUsername username={id} />
        ) : getMongoIdRegex().test(id) ? (
          <UserById userId={id} />
        ) : (
          <NotFound />
        )
      ) : (
        <NotFound />
      )}
    </Base>
  );
};

export default SingleProfile;
