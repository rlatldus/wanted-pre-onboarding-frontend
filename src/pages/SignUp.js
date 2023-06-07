import { useEffect, useState } from "react";
import { SubmitButton } from "../components/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Label} from "../components/input";
const SignUp = () => {



  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.email.includes("@") && userData.password.length >= 8) {
      console.log("성공");
      setIsFormValid(true);
    } else {
      console.log("실패");
      setIsFormValid(false);
    }
    axios
    .post(
      `https://www.pre-onboarding-selection-task.shop/auth/signup`,
      {
        email: userData.email,
        password: userData.password
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log("회원가입 성공:", response);
      navigate("/signin")
  
    })
    .catch(function (error) {
      console.log("회원가입 실패:", error.response);
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <Label
        handleChange={handleChange}
        email={userData.email}
        password={userData.password}
      />
      <SubmitButton type="submit" data-testid="signup-button" disabled={isFormValid}>
        회원가입
      </SubmitButton>
    </form>
  );
};

export default SignUp;
