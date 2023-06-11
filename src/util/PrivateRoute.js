import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// 토큰이 없으면 todo 페이지 접근 불가 -> signin 페이지로 이동
function PrivateRoute() {
  const access_Token = localStorage.getItem("access_token");
  return access_Token ? <Outlet /> : <Navigate to="/signin" />;
}


export default PrivateRoute;
