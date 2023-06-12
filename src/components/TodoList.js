import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SubmitButton } from "./button";

const List = styled.li`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  min-width: 260px;

  span {
    margin-left: 3px;
    display: block;
    width:300px;
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
      border-color: var(--limeorange);
      box-shadow: 0 0 7px var(--limeorange);

    }
  }

  label {
    display: flex;
    align-items: center;
  }

    .buttonWrap{
      display: flex;
    }
  }
`;

const TodoListli = ({ id, todo, index, todos, setTodos }) => {
  const access_token = localStorage.getItem("access_token");
  const [editingTodoIndex, setEditingTodoIndex] = useState(false);
  const [originalTodo, setOriginalTodo] = useState(todo); // 수정 이전의 내용 저장
  const [modifiedTodo, setModifiedTodo] = useState(todo);
  const [isChecked, setIsChecked] = useState(() => localStorage.getItem(`isChecked-${id}`) === "true");

  const handleModifyTodo = () => {
    setEditingTodoIndex(true);
    setOriginalTodo(modifiedTodo);
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
        .then(() => {
          setEditingTodoIndex(false);
        })
        .catch(() => {
          alert("수정에 실패했습니다.");
        });
    } else {
      setModifiedTodo([...todos][index].todo);
    }
  };

  const handleCancelModification = () => {
    setEditingTodoIndex(false);
    setModifiedTodo(originalTodo);
  };

  const handleDeleteTodo = () => {
    axios
      .delete(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(() => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      })
      .catch(() => {
        alert("삭제 실패했습니다.");
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
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        {editingTodoIndex ? (
          <>
            <input type="text" value={modifiedTodo} onChange={(e) => setModifiedTodo(e.target.value)} data-testid="modify-input" />
            <div className="buttonWrap">
              <SubmitButton small onClick={handleSubmitModification} data-testid="submit-button">
                제출
              </SubmitButton>
              <SubmitButton small onClick={handleCancelModification} data-testid="cancel-button">
                취소
              </SubmitButton>
            </div>
          </>
        ) : (
          <>
            <label>
              <span>{modifiedTodo}</span>
            </label>
            <div className="buttonWrap">
              <SubmitButton primary small onClick={() => handleModifyTodo(index)} data-testid="modify-button">
                수정
              </SubmitButton>
              <SubmitButton primary small onClick={() => handleDeleteTodo(index)} data-testid="delete-button">
                삭제
              </SubmitButton>
            </div>
          </>
        )}
      </label>
    </List>
  );
};

export { TodoListli };
