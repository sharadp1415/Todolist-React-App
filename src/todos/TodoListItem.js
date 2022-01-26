import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <div
      className="todo-item-container"
      id={todo.text}
      data-date={todo.date}
      data-time={todo.time}
      data-iscompleted={todo.isCompleted}
    >
      <h3>{todo.text}</h3>
      <span className="due-date">
        Due Date:{" "}
        {todo.time + todo.date === "" ? " None" : todo.time + " " + todo.date}
      </span>
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
