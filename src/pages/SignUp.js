import { useEffect, useState } from "react";
import { Button } from "../components/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Label} from "../components/input";
import { Form } from "../components/form";
const SignUp = () => {



  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const[isAvailable, setIsAvailable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    setIsAvailable(userData.email.includes("@") && userData.password.length >= 8);
  }, [userData.email, userData.password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAvailable) {
      axios
        .post(
          `https://www.pre-onboarding-selection-task.shop/auth/signup`,
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
          console.log("회원가입 성공:", response);
          navigate("/signin");
        })
        .catch(function (error) {
          console.log("회원가입 실패:", error.response);
        });
    } else {
      console.log("실패");
    }
  };


  return (
    <Form >
      <Label handleChange={handleChange} email={userData.email} password={userData.password} />
      <Button click={handleSubmit} primary data-testid="signup-button" disabled={!isAvailable}>
        회원가입
      </Button>
    </Form>
  );
};

export default SignUp;
