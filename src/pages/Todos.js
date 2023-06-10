import React, { useEffect, useState } from "react";
import { SubmitButton } from "../components/button";
import { TodoListli } from "../components/TodoList";
import axios from "axios";

function Todos() {
  const access_token = localStorage.getItem("access_token");
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => { //NOTE 정보 가져오기
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
        console.log(res.data)
      });
  }, [access_token]);

const handleAddTodo = () => {
  if (newTodo.trim() !== "") {
    axios
      .post(
        `https://www.pre-onboarding-selection-task.shop/todos`,
        {
          todo: newTodo,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        setTodos((prevTodos) => [...prevTodos, response.data]);
        setNewTodo("");
      })
      .catch(function (error) {
        console.log("글쓰기 실패:", error.response);
      });
  }
};







  return (
    <div>
      <h1>Todo List</h1>

      <input type="text" value={newTodo} onChange={handleInputChange} placeholder="Enter a new todo" data-testid="new-todo-input" />
      <SubmitButton small onClick={handleAddTodo} data-testid="new-todo-add-button">
        추가
      </SubmitButton>
      <ul>
        {todos.map((todo, index) => (
          <TodoListli key={index} todo={todo.todo} id={todo.id} index={index} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
