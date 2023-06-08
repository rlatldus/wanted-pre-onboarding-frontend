import React, { useState } from 'react';
import axios from "axios";
import { Button } from '../components/button';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodoIndex, setEditingTodoIndex] = useState(null);
  const [modifiedTodo, setModifiedTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleModifyTodo = (index) => {
    setEditingTodoIndex(index);
    setModifiedTodo(todos[index]);
  };

  const handleSubmitModification = (index) => {
    if (modifiedTodo.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[index] = modifiedTodo;
      setTodos(updatedTodos);
      setEditingTodoIndex(null);
      setModifiedTodo('');

      axios
      .post(
        `https://www.pre-onboarding-selection-task.shop/todos`,
        {
          todo: ""
        },
        {
          headers: {
            "Authorization": "Bearer access_token",
            "Content-Type": "application/json"
          },
        }
      )
      .then(function (response) {
        console.log("로그인 성공:", response.data);
        localStorage.setItem( "access_token", response.data.access_token);
      })
      .catch(function (error) {
        console.log("로그인 실패:", error.response);
      });
  };
    
    }


  

  const handleCancelModification = () => {
    setEditingTodoIndex(null);
    setModifiedTodo('');
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
        data-testid="new-todo-input"
      />
      <Button small onClick={handleAddTodo} data-testid="new-todo-add-button">추가</Button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingTodoIndex === index ? (
              <>
                <input
                  type="text"
                  value={modifiedTodo}
                  onChange={(e) => setModifiedTodo(e.target.value)}
                  data-testid="modify-input"
                />
                <Button small
                  onClick={() => handleSubmitModification(index)}
                  data-testid="submit-button"
                >
                  제출
                </Button>
                <Button small
                  onClick={handleCancelModification}
                  data-testid="cancel-button"
                >
                  취소
                </Button>
              </>
            ) : (
              <>
                <label>
                  <input type="checkbox" />
                  <span>{todo}</span>
                </label>
                <Button small
                  onClick={() => handleModifyTodo(index)}
                  data-testid="modify-button"
                >
                  수정
                </Button>
                <Button small
                  onClick={() => handleDeleteTodo(index)}
                  data-testid="delete-button"
                >
                  삭제
                </Button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
