import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  const timer = setInterval(() => {
    const date = Date.now();
    const dueDate = new Date(todo.date + " " + todo.time);
    console.log(date);
    console.log(date > dueDate);
    console.log("todo overdue?:", todo.isOverdue);
    if (date > dueDate) {
      todo.isOverdue = true;
    }
  }, 1000);

  if (todo.isOverdue) {
    return (
      <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <span className="due-date overdue">Due Date: {todo.time}</span>
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
  } else {
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
  }
};

export default TodoListItem;
