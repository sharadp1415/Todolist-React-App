import React from "react";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { removeCompletedTodos, removeTodo } from "./actions";
import "./CompletedTodoList.css";

const CompletedTodoList = ({
  todos = [],
  onRemovePressed,
  onClearAllPressed,
}) => {
  return (
    <div className="list-wrapper">
      <div className="completed-list-container">
        <div className="label">Completed Todo List</div>
        <button
          onClick={() => onClearAllPressed()}
          className="clear-all-button"
        >
          Clear All
        </button>
      </div>
      {todos.map((todo) =>
        todo.isCompleted ? (
          <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />
        ) : null
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onClearAllPressed: () => dispatch(removeCompletedTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTodoList);
