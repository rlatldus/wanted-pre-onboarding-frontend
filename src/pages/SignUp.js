import { useEffect, useState } from "react";
import { SubmitButton } from "../components/button";

const SignUp = () => {
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>회원가입</p>
      <label>
        이메일입력
        <input
          type="email"
          name="email"
          tabIndex="1"
          data-testid="email-input"
          placeholder="8자이상 가능합니다."
          value={userData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        비밀번호입력
        <input
          type="password"
          name="password"
          tabIndex="2"
          minLength={8}
          placeholder="이메일을 입력해주세요."
          value={userData.password}
          onChange={handleChange}
          data-testid="password-input"
        />
      </label>
      <SubmitButton type="submit" data-testid="signup-button" disabled={isFormValid}>
        회원가입
      </SubmitButton>
    </form>
  );
};

export default SignUp;
