import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./containers/Login";
import { store } from "./redux/store";


function PrivateRoutes() {
  const user = store.getState();
  const token = user.login.loginInfo;
  if (token) {
    return <Outlet />;
  } else {
    return <Login />;
  }
}

export default PrivateRoutes;
