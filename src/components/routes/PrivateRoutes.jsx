import React from "react";
import LoginPage from "../../pages/LoginPage";
//import { getFromLocalStorage } from "../../utils/LocalStorageHelper";
function PrivateRoutes({ children }) {
  const loggedIn = true//getFromLocalStorage()?.token;

  if (!loggedIn) {
    return <LoginPage/>;
  }
  return children;
}

export default PrivateRoutes;
