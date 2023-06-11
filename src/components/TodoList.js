import { SubmitButton } from "./button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const List = styled.li`
  margin: 7px 0px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  min-width: 260px;

  span {
    margin-left: 3px;
  }

  input[type="checkbox"] {
    transform: scale(1.5);
    margin-right: 8px;
  }

  input[data-testid="modify-input"] {
    margin-left: 3px;
    height: 25px;
    font-size: 1.1rem;
    border: none;
    padding: 5px 5px;

    &:focus {
      outline: none;
      border-color: var(--green);
      box-shadow: 0 0 10px var(--green);
    }
  }

  label {
    display: flex;
    align-items: center;
  }

  button:last-child {
    background-color: var(--deepGreen);
    color: white;
    margin-left: 10px;
  }
`;

const TodoListli = ({ id, todo, index, todos, setTodos }) => {
  const access_token = localStorage.getItem("access_token");
  const [editingTodoIndex, setEditingTodoIndex] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState(todo);
  const [isChecked, setIsChecked] = useState(() => localStorage.getItem(`isChecked-${id}`) === "true");

  const handleModifyTodo = () => {
    setEditingTodoIndex(true);
  };

  const handleSubmitModification = () => {
    if (modifiedTodo && modifiedTodo.trim() !== "") {
      axios
        .put(
          `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
          {
            todo: modifiedTodo,
            isCompleted: isChecked,
          },
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          setEditingTodoIndex(false);
          console.log("수정 성공:", response.data);
        })
        .catch(function (error) {
          console.log("수정 실패:", error.response);
        });
    } else {
      setModifiedTodo([...todos][index].todo);
    }
  };

  const handleCancelModification = () => {
    setEditingTodoIndex(false);
    setModifiedTodo([...todos][index].todo);
  };

  const handleDeleteTodo = () => {
    axios
      .delete(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(function (response) {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        console.log("삭제 성공:", response, id, updatedTodos);
      })
      .catch(function (error) {
        console.log("삭제 실패:", error.response);
      });
  };

  useEffect(() => {
    localStorage.setItem(`isChecked-${id}`, isChecked.toString());
  }, [isChecked, id]);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <List key={index}>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      {editingTodoIndex ? (
        <>
          <input type="text" value={modifiedTodo} onChange={(e) => setModifiedTodo(e.target.value)} data-testid="modify-input" />
          <SubmitButton small onClick={handleSubmitModification} data-testid="submit-button">
            제출
          </SubmitButton>
          <SubmitButton small onClick={handleCancelModification} data-testid="cancel-button">
            취소
          </SubmitButton>
        </>
      ) : (
        <>
          <label>
            {/* 일단 값이 다르기 때문에 수정, 삭제 */}
            <span>{modifiedTodo}</span>
          </label>
          <SubmitButton small onClick={() => handleModifyTodo(index)} data-testid="modify-button">
            수정
            {/* 5번 수정 클릭 */}
          </SubmitButton>
          <SubmitButton small onClick={() => handleDeleteTodo(index)} data-testid="delete-button">
            삭제
          </SubmitButton>
        </>
      )}
    </List>
  );
};

export { TodoListli };
