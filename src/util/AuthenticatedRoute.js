import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// 토큰이 있으면 todo로 바로 이동
function AuthenticatedRoute() {
  const access_Token = localStorage.getItem("access_token");
  return access_Token ? <Navigate to="/todo" /> : <Outlet />;
}

export default AuthenticatedRoute;
