import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { connect } from "react-redux";
import { removeTodo, markTodoAsCompleted } from "./actions";

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) =>
      !todo.isCompleted ? (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ) : null
    )}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
