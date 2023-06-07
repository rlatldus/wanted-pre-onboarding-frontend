import { useEffect, useState } from "react";
import { SubmitButton } from "../components/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/input";

const SignIn = () => {
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
        `https://www.pre-onboarding-selection-task.shop/auth/signin`,
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
        localStorage.setItem( "access_token", response.data.access_token);
        navigate("/todo");
      })
      .catch(function (error) {
        console.log("로그인 실패:", error.response);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label
        handleChange={handleChange}
        email={userData.email}
        password={userData.password}
      />
      <SubmitButton
        type="submit"
        data-testid="signup-button"
        disabled={isFormValid}
      >
        로그인
      </SubmitButton>
    </form>
  );
};

export default SignIn;
