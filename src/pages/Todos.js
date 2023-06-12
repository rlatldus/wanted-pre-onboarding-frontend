import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TodoListli } from "../components/TodoList";
import { SubmitButton } from "../components/button";
import { TodoForm } from "../components/form";

const Write = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
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

function Todos() {
  const access_token = localStorage.getItem("access_token");
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://www.pre-onboarding-selection-task.shop/todos`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        setTodos(res.data);
        console.log(todos)
      });
  }, [access_token, setTodos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      axios
        .post(
          `https://www.pre-onboarding-selection-task.shop/todos`,
          { todo: newTodo },
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setTodos((prevTodos) => [...prevTodos, response.data]);
          setNewTodo("");
        })
        .catch(() => {
          alert("글쓰기가 실패되었습니다.");
        });
    }
  };

  return (
    <TodoForm>
      <h1>Todo List</h1>
      <Write>
        <input type="text" value={newTodo} onChange={handleInputChange} placeholder="나의 할 일을 적어주세요" data-testid="new-todo-input" />
        <SubmitButton primary small onClick={handleAddTodo} data-testid="new-todo-add-button">
          추가
        </SubmitButton>
      </Write>
      <ul>
        {todos.map((todo, index) => (
          <TodoListli key={todo.id} todo={todo.todo} id={todo.id} index={index} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </TodoForm>
  );
}

export default Todos;
