import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  const timer = setInterval(() => {
    const date = new Date.now();
  }, 1000);

  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <span className="due-date">Due Date: {todo.time}</span>
      <div className="buttons-container">
        {todo.isCompleted ? null : (
          <button
            onClick={() => onCompletedPressed(todo.text)}
            className="completed-button"
          >
            Mark As Completed
          </button>
        )}
        <button
          onClick={() => onRemovePressed(todo.text)}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
