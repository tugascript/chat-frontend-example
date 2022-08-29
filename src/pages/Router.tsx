import React from "react";
import { Route, Routes } from "react-router-dom";
import Chats from "./Chats";
import ConfirmEmail from "./ConfirmEmail";
import Home from "./Home";
import SingleChat from "./SingleChat";
import SingleProfile from "./SingleProfile";

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="confirm-email/:token" element={<ConfirmEmail />} />
        </Route>
        <Route path="/chats">
          <Route index element={<Chats />} />
          <Route path=":id" element={<SingleChat />} />
        </Route>
        <Route path="/profiles">
          <Route index element={<h1>Profiles</h1>} />
          <Route path=":id" element={<SingleProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
