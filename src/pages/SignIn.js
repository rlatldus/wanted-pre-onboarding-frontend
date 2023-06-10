import React, { useEffect, useState } from "react";
import { Button } from "../components/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/input";
import { Form } from "../components/form";

const SignIn = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isAvailable, setIsAvailable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      navigate("/todo");
    }
  }, [navigate]);
  
    useEffect(() => {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        navigate("/signin");
      }
    }, [navigate]);
  
  useEffect(() => {
    setIsAvailable(userData.email.includes("@") && userData.password.length >= 8);
  }, [userData.email, userData.password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAvailable) {
      axios
        .post(
          "https://www.pre-onboarding-selection-task.shop/auth/signin",
          {
            email: userData.email,
            password: userData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log("로그인 성공:", response.data);
          localStorage.setItem("access_token", response.data.access_token);
          navigate("/todo");
        })
        .catch(function (error) {
          console.log("로그인 실패:", error.response);
        });
    } else {
      console.log("실패");
    }
  };

  return (
    <Form>
      <Label handleChange={handleChange} email={userData.email} password={userData.password} />
      <Button primary data-testid="signup-button" disabled={!isAvailable} click={handleSubmit}>
        로그인
      </Button>
    </Form>
  );
};

export default SignIn;
