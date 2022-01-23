import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  const timer = setInterval(() => {
    const date = Date.now();
    const dueDate = new Date(todo.date + " " + todo.time);
    if (date > dueDate) {
      todo.isOverdue = true;
      const element = document.getElementById(todo.text);
      if (element != null && !todo.isCompleted) {
        element.classList.add("overdue");
        clearInterval(timer);
      }
      if (element != null && todo.isCompleted) {
        element.classList.remove("overdue");
        clearInterval(timer);
      }
    }
  }, [1000, todo]);

  return (
    <div className="todo-item-container" id={todo.text}>
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
