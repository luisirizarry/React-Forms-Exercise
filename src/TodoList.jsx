import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuid } from 'uuid';
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const INITIAL_STATE = [
    { id: uuid(), task: 'Take out trash'},
    { id: uuid(), task: 'Clean Dishes'}
  ]

  const [todos, setTodos] = useState(INITIAL_STATE);
  
  const addTodo = (newTodo) => {
    setTodos( todos => [ ...todos, {...newTodo, id: uuid()}] )
  }

  const deleteTodo = (todoToDeleteId) => {
    setTodos(todos => todos.filter(todo => todo.id !== todoToDeleteId));
  };

  return (
    <>
      <h3>Todo List</h3>
      <NewTodoForm addTodo={addTodo}/>
      <div>
        {todos.map((todo) => (
          <Todo id={todo.id} task={todo.task} deleteTodo={deleteTodo} key={todo.id} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
