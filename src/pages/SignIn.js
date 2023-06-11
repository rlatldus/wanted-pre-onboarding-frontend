import { Form } from "../components/form";

const SignIn = () => {
  return <Form children="로그인" Authentication="signin" alertMessage="로그인되었습니다." navigation="/todo" />;
};
export default SignIn;
