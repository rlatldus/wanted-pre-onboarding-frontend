import { Form } from "../components/form";

const SignUp = () => {

  return (
    <Form
      children="회원가입"
      Authentication="signup"
      alertMessage="회원가입이 완료되었습니다. 로그인 페이지로 이동합니다."
      navigation="/signin"
    />
  );
};

export default SignUp;
