import React, { useEffect } from "react";
import { Form } from "../components/form";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("access_token");
  //   if (accessToken) {
  //     navigate("/todo");
  //   } else {
  //     navigate("/signin");
  //   }
  // }, [navigate]);

  return <Form children="로그인" Authentication="signin" alertMessage="로그인되었습니다." navigation="/todo" />;
};
export default SignIn;
