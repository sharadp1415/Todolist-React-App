export const CREATE_TODO = "CREATE_TODO";
//action creator
export const createTodo = ({ inputValue, inputTime }) => {
  const text = inputValue;
  const time = inputTime;

  return {
    type: CREATE_TODO,
    payload: {
      text,
      time,
    },
  };
};

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const markTodoAsCompleted = (text) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { text },
});

export const REMOVE_COMPLETED_TODOS = "REMOVE_COMPLETED_TODOS";
export const removeCompletedTodos = () => ({
  type: REMOVE_COMPLETED_TODOS,
  payload: null,
});
