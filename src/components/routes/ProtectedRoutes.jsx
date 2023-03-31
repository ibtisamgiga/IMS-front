import React from "react";

function ProtectedRoutes({ children, role,user }) {
  //const loggedIn = getFromLocalStorage()?.token;
  if ((role == user.role)) {
    return children;
  }

  return null//<div className="body">Forbidden</div>;
}

export default ProtectedRoutes;
