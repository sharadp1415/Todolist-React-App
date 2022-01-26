import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  REMOVE_COMPLETED_TODOS,
} from "./actions";

//called whenever any action is triggered in the application
export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text, time, date } = payload;
      const newTodo = {
        text,
        time,
        date,
        isCompleted: false,
        isOverdue: false,
      };

      return state.concat(newTodo);
    }

    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }

    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      let selectedTodo;

      state = state.filter((todo) => {
        if (todo.text === text) {
          selectedTodo = { ...todo, isCompleted: true, isOverdue: false };
          return false;
        } else {
          return true;
        }
      });

      state.unshift(selectedTodo);
      return state;
    }

    case REMOVE_COMPLETED_TODOS: {
      if (window.confirm("Confirm to Remove All Completed Todos.")) {
        return state.filter((todo) => !todo.isCompleted);
      } else {
        return state;
      }
    }

    default:
      return state;
  }
};
