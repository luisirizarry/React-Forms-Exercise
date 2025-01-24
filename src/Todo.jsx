import React from "react";
import "./Box.css";

const Todo = ({ id, task, deleteTodo }) => {
  return (
    <div className="Todo">
        <p>
            {task}
        </p>
      <button className="Todo-delete" onClick={() => deleteTodo(id)}>
        X
      </button>
    </div>
  );
};

export default Todo;
