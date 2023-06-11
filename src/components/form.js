import styled from "styled-components";

const SignForm = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  label{
    font-weight: 600;
    text-align: left;
  }

  input {
    margin-top:10px;
    margin-bottom:30px;
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

const Form = ({ children}) => {
  return (
    <SignForm>
      <form>{children}</form>
    </SignForm>
  );
};

const TodoForm = ({ children }) => {
  return <SignForm>{children}</SignForm>;
};

export { Form, TodoForm };
