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
      const { text, time } = payload;
      const newTodo = {
        text,
        time,
        isCompleted: false,
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

      console.log(selectedTodo);
      console.log(state);

      state = state.filter((todo) => {
        if (todo.text === text) {
          selectedTodo = { ...todo, isCompleted: true };
          return false;
        } else {
          return true;
        }
      });

      state.unshift(selectedTodo);
      return state;
    }

    case REMOVE_COMPLETED_TODOS: {
      return state.filter((todo) => !todo.isCompleted);
    }

    default:
      return state;
  }
};
