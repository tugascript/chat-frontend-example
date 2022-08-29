import React from "react";
import ErrorCard from "../../components/ErrorCard";
import LoadingCard from "../../components/LoadingCard";
import { useUserByIdQuery } from "../../redux/apis/accounts-api";
import SingleProfileCard from "./SingleProfileCard";

interface IProps {
  userId: string;
}

const UserById: React.FC<IProps> = ({ userId }) => {
  const { isLoading, isSuccess, data } = useUserByIdQuery(userId);

  return isLoading ? (
    <LoadingCard />
  ) : isSuccess && data ? (
    <SingleProfileCard user={data} />
  ) : (
    <ErrorCard />
  );
};

export default UserById;
