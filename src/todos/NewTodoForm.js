import React, { useState } from "react";
import "./NewTodoForm.css";
import { connect } from "react-redux";
import { createTodo } from "./actions";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [inputDate, setInputDate] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type Your New Todo Here"
      />
      <input
        className="new-todo-clock"
        type="time"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
      />
      <input
        className="new-todo-date"
        type="date"
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed({ inputValue, inputTime, inputDate });
            setInputValue("");
            setInputTime("");
            setInputDate("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};

//passed in entire state of app in an object, specificies all propeties compenent needs access to.
const mapStateToProps = (state) => ({
  todos: state.todos,
});

//dispatch is a function that allows componenets to trigger actions.
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (data) => dispatch(createTodo(data)),
});

//pass in component in second set of parameters
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
