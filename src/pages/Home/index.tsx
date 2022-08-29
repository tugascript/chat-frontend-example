import React from "react";
import HomeCard from "./HomeCard";
import Base from "../../components/Base";
import UnprotectedRoute from "../../components/routes/UnprotectedRoute";

const Home: React.FC = () => {
  return (
    <UnprotectedRoute>
      <Base>
        <HomeCard />
      </Base>
    </UnprotectedRoute>
  );
};

export default Home;
