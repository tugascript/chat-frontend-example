import React from "react";
import ErrorCard from "../../components/ErrorCard";
import LoadingCard from "../../components/LoadingCard";
import { useUserByUsernameQuery } from "../../redux/apis/accounts-api";
import SingleProfileCard from "./SingleProfileCard";

interface IProps {
  username: string;
}

const UserByUsername: React.FC<IProps> = ({ username }) => {
  const { isLoading, isSuccess, data } = useUserByUsernameQuery(username);

  return isLoading ? (
    <LoadingCard />
  ) : isSuccess && data ? (
    <SingleProfileCard user={data} />
  ) : (
    <ErrorCard />
  );
};

export default UserByUsername;
