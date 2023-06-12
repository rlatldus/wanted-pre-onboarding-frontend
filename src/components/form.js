import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { Label } from "./label";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const SignForm = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    font-weight: 600;
    text-align: left;
  }

  input {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 30px;
    width: 300px;
    border: none;
    display: block;
    &:focus {
      outline: none;
      border-color: var(--limeorange);
      box-shadow: 0 0 7px var(--limeorange);
    }
  }
`;

const TodosForm = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  #newTodo {
    input {
      margin-right: 8px;
      height: 25px;
      font-size: 1rem;
      border: none;
      padding: 5px 5px;
    }

    input:focus {
      outline: none;
      border-color: var(--limeorange);
      box-shadow: 0 0 7px var(--limeorange);
    }
  }
`;

const Form = ({ children, Authentication, alertMessage, navigation }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isAvailable, setIsAvailable] = useState(false);



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
          `https://www.pre-onboarding-selection-task.shop/auth/${Authentication}`,
          { email: userData.email, password: userData.password },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then(function (response) {
          alert(alertMessage );
          Authentication === "signin" && localStorage.setItem("access_token", response.data.access_token);
          navigate(navigation );
          console.log(Authentication, navigation)
        })
        .catch(function (error) {
          console.log(error.response);
          alert(error.response.data.message);
        });
    }
  };

  return (
    <SignForm>
      <form>
        <Label handleChange={handleChange} email={userData.email} password={userData.password} />
        <Button primary data-testid={`${Authentication}-button`} disabled={!isAvailable} click={handleSubmit}>
          {children}
        </Button>
      </form>
    </SignForm>
  );
};

const TodoForm = ({ children }) => {
  return <TodosForm>{children}</TodosForm>;
};

export { Form, TodoForm };
