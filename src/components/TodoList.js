import { SubmitButton } from "./button";
import React, { useState } from 'react';
import axios from "axios";

const TodoList = ({data, handleDeleteTodo}) => {
  const [todos, setTodos] = useState([]);
  const id = data.id;
  const [modifiedTodo, setModifiedTodo] = useState("");
  const [editingTodoIndex, setEditingTodoIndex] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const handleModifyTodo = (index) => {
    setEditingTodoIndex(index);
    setModifiedTodo(todos[index]);
  };

  const handleSubmitModification = (index) => {
    if (modifiedTodo.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[index] = modifiedTodo;
      setTodos(updatedTodos);
      setEditingTodoIndex(null);
      setModifiedTodo("");

      axios
        .post(
          `https://www.pre-onboarding-selection-task.shop/todos`,
          {
            todo: "",
          },
          {
            headers: {
              Authorization: "Bearer access_token",
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log("로그인 성공:", response.data);
          localStorage.setItem("access_token", response.data.access_token);
        })
        .catch(function (error) {
          console.log("로그인 실패:", error.response);
        });
    }
  };

  const handleCancelModification = () => {
    setEditingTodoIndex(null);
    setModifiedTodo('');
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <li>
      <>
        <label>
          {isEditMode ? (
            <input
              type="text"
              value={modifiedTodo}
              onChange={(e) => setModifiedTodo(e.target.value)}
              data-testid="modify-input"
            />
          ) : (
            <>
              <input type="checkbox" />
              <span>{todo}</span>
            </>
          )}
        </label>

        {isEditMode ? (
          <>
            <SubmitButton
              small
              onClick={() => handleSubmitModification(true)}
              data-testid="submit-button"
            >
              제출
            </SubmitButton>
            <SubmitButton
              small
              onClick={handleCancelModification}
              data-testid="cancel-button"
            >
              취소
            </SubmitButton>
          </>
        ) : (
          <>
            <label>
              <input type="checkbox" />
              <span>{todo}</span>
            </label>
            <SubmitButton
              small
              onClick={() => handleModifyTodo(true)}
              data-testid="modify-button"
            >
              수정
            </SubmitButton>
            <SubmitButton
              small
              onClick={() => handleDeleteTodo(id)}
              data-testid="delete-button"
            >
              삭제
            </SubmitButton>
          </>
        )}
      </>
    </li>
  );
};

export { TodoList };
