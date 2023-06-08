import { Link } from "react-router-dom";
import { Form } from "../components/form";
import { Button } from "../components/button";
import styled from "styled-components";

const Main = () => {


  const Title = styled.p`
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 10px;
  `;
  


    return (
      <Form>
        <Title>TODO List</Title>
        <Link to="/signin">
          <Button primary>
          로그인
          </Button>
        </Link>
        <Link to="/signup">
          <Button>
          회원가입
          </Button>
        </Link>
      </Form>
    );
  };
  
  export default Main;