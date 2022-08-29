import React from "react";
import { Route, Routes } from "react-router-dom";
import Invitation from "./Invitation";
import Chats from "./Chats";
import ConfirmEmail from "./ConfirmEmail";
import Home from "./Home";
import SingleChat from "./SingleChat";
import SingleProfile from "./SingleProfile";
import ResetEmail from "./ResetEmail";
import ResetPassword from "./ResetPassword";
import EditDescription from "./EditDescription";

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
          <Route path=":id" element={<SingleProfile />} />
          <Route path=":id/edit" element={<EditDescription />} />
        </Route>
        <Route path="/invitations">
          <Route path=":invitation" element={<Invitation />} />
        </Route>
        <Route path="/reset-password">
          <Route index element={<ResetEmail />} />
          <Route path=":token" element={<ResetPassword />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
