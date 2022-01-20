import React from "react";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { removeTodo } from "./actions";
import "./CompletedTodoList.css";

const CompletedTodoList = ({ todos = [], onRemovePressed }) => {
  return (
    <div className="list-wrapper">
      <div className="label">Completed Todo List</div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTodoList);
